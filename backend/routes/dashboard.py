import os
import uuid
from datetime import datetime, timedelta, timezone

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from core.auth import get_clerk_user_id
from core.clerk import get_clerk_user
from core.database import get_db
from models.organizations import OrganizationMembers
from models.users import Users
from models.verification import VerificationRequests
from schemas.dashboard import CreateRequestInput, VerificationRequestOut
from services.users import get_or_create_user

router = APIRouter(prefix="/api/v1", tags=["dashboard"])

REQUEST_EXPIRY_DAYS = int(os.getenv("REQUEST_EXPIRY_DAYS", "7"))


async def _resolve_user_and_org(
    clerk_id: str, db: AsyncSession
) -> tuple[Users, str]:
    """Return the User row and their org_id, auto-provisioning on first login."""
    result = await db.execute(select(Users).where(Users.clerk_id == clerk_id))
    user = result.scalar_one_or_none()

    if user is None:
        # First login — fetch profile from Clerk and provision
        try:
            profile = await get_clerk_user(clerk_id)
        except Exception:
            raise HTTPException(
                status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
                detail="Could not fetch user profile. Please try again.",
            )
        user, org = await get_or_create_user(
            db, clerk_id, profile["email"], profile["full_name"]
        )
        return user, org.id

    member_result = await db.execute(
        select(OrganizationMembers).where(OrganizationMembers.user_id == user.id)
    )
    member = member_result.scalar_one_or_none()
    if member is None:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="No organization found for user.",
        )

    return user, member.organization_id


@router.get("/requests", response_model=list[VerificationRequestOut])
async def list_requests(
    clerk_id: str = Depends(get_clerk_user_id),
    db: AsyncSession = Depends(get_db),
):
    _, org_id = await _resolve_user_and_org(clerk_id, db)
    result = await db.execute(
        select(VerificationRequests)
        .where(VerificationRequests.organization_id == org_id)
        .order_by(VerificationRequests.created_at.desc())
    )
    return result.scalars().all()


@router.post(
    "/requests",
    response_model=VerificationRequestOut,
    status_code=status.HTTP_201_CREATED,
)
async def create_request(
    body: CreateRequestInput,
    clerk_id: str = Depends(get_clerk_user_id),
    db: AsyncSession = Depends(get_db),
):
    user, org_id = await _resolve_user_and_org(clerk_id, db)

    now = datetime.now(timezone.utc)
    req = VerificationRequests(
        id=str(uuid.uuid4()),
        organization_id=org_id,
        created_by=user.id,
        renter_name=body.renter_name,
        renter_email=body.renter_email,
        token=str(uuid.uuid4()),
        status="pending",
        created_at=now,
        expires_at=now + timedelta(days=REQUEST_EXPIRY_DAYS),
    )
    db.add(req)
    await db.commit()
    await db.refresh(req)
    return req

import uuid
from datetime import datetime, timezone

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from models.organizations import OrganizationMembers, Organizations
from models.users import Users


async def get_or_create_user(
    db: AsyncSession,
    clerk_id: str,
    email: str,
    full_name: str | None = None,
) -> tuple[Users, Organizations]:
    """Return the user and their primary organization, creating both if this is a first login."""
    result = await db.execute(select(Users).where(Users.clerk_id == clerk_id))
    user = result.scalar_one_or_none()

    if user is not None:
        # Fetch the org this user belongs to
        member_result = await db.execute(
            select(OrganizationMembers).where(OrganizationMembers.user_id == user.id)
        )
        member = member_result.scalar_one_or_none()
        if member:
            org_result = await db.execute(
                select(Organizations).where(Organizations.id == member.organization_id)
            )
            org = org_result.scalar_one()
            return user, org

    # First login — create user, org, and membership in one shot
    now = datetime.now(timezone.utc)

    if user is None:
        user = Users(
            id=str(uuid.uuid4()),
            clerk_id=clerk_id,
            email=email,
            full_name=full_name,
            created_at=now,
        )
        db.add(user)
        await db.flush()  # get user.id without committing

    org = Organizations(
        id=str(uuid.uuid4()),
        name=f"{full_name or email}'s Organization",
        type="individual",
        created_at=now,
    )
    db.add(org)
    await db.flush()

    member = OrganizationMembers(
        id=str(uuid.uuid4()),
        organization_id=org.id,
        user_id=user.id,
        role="owner",
        created_at=now,
    )
    db.add(member)
    await db.commit()

    return user, org

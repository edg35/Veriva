import models
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from sqlalchemy.exc import IntegrityError

from database import AsyncSessionLocal

router = APIRouter(prefix='/api/waitlist', tags=['waitlist'])


class WaitlistRequest(BaseModel):
    email: EmailStr


class WaitlistUpdateRequest(BaseModel):
    product_updates: bool = True
    launch_updates: bool = True
    early_access_updates: bool = True
    tips_and_tricks_updates: bool = True

# TODO: Implement waitlist management with database operations


@router.get("/")
async def get_waitlist():
    return {"message": "To be implemented"}

# TODO: Implement retrieval of specific waitlist entry by email


@router.get("/{email}")
async def get_waitlist_entry(email: EmailStr):
    return {"message": "To be implemented"}

# TODO: Implement retrieval of specific waitlist entry by token


@router.get("/{token}")
async def get_waitlist_entry_by_token(token: str):
    return {"message": "To be implemented"}


@router.post("/join", status_code=201)
async def join_waitlist(body: WaitlistRequest):
    async with AsyncSessionLocal() as session:
        waitlist_entry = models.WaitList(email=body.email)
        session.add(waitlist_entry)
        try:
            await session.commit()
        except IntegrityError:
            raise HTTPException(
                status_code=409, detail="Email already on waitlist")
    return {"message": "Email added to waitlist"}

# TODO: Implement update of waitlist entry by email


@router.put("/update/{token}", status_code=200)
async def update_waitlist_email(token: str, body: WaitlistUpdateRequest):
    return {"message": "To be implemented"}

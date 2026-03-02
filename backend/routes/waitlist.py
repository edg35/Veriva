import models
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from sqlalchemy.exc import IntegrityError

from database import AsyncSessionLocal

router = APIRouter(prefix='/api/waitlist', tags=['waitlist'])


class WaitlistRequest(BaseModel):
    email: EmailStr

# TODO: Implement waitlist management with database operations


@router.get("/")
async def get_waitlist():
    return {"message": "To be implemented"}

# TODO: Implement retrieval of specific waitlist entry by email


@router.get("/{email}")
async def get_waitlist_entry(email: EmailStr):
    return {"message": "To be implemented"}

# TODO: Implement removal of waitlist entry by email


@router.delete("/remove/{email}", status_code=204)
async def remove_from_waitlist(email: EmailStr):
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


@router.put("/update/{email}", status_code=200)
async def update_waitlist_email(email: EmailStr, body: WaitlistRequest):
    return {"message": "To be implemented"}

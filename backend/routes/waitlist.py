from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from sqlalchemy.exc import IntegrityError

import models
from database import AsyncSessionLocal

router = APIRouter()


class WaitlistRequest(BaseModel):
    email: EmailStr


@router.post("/waitlist")
async def join_waitlist(body: WaitlistRequest):
    async with AsyncSessionLocal() as session:
        waitlist_entry = models.WaitList(email=body.email)
        session.add(waitlist_entry)
        try:
            await session.commit()
        except IntegrityError:
            raise HTTPException(status_code=409, detail="Email already on waitlist")
    return {"message": "Email added to waitlist"}

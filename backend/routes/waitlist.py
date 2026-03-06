from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.exc import IntegrityError
from sqlalchemy.ext.asyncio import AsyncSession

from core.database import get_db
from schemas.waitlist import WaitlistJoinRequest, WaitlistUpdateRequest
from services.waitlist import add_to_waitlist

router = APIRouter(prefix='/api/waitlist', tags=['waitlist'])


@router.get("/")
async def get_waitlist():
    return {"message": "To be implemented"}


@router.get("/{email}")
async def get_waitlist_entry(email: str):
    return {"message": "To be implemented"}


@router.get("/by-token/{token}")
async def get_waitlist_entry_by_token(token: str):
    return {"message": "To be implemented"}


@router.post("/join", status_code=201)
async def join_waitlist(body: WaitlistJoinRequest, session: AsyncSession = Depends(get_db)):
    try:
        await add_to_waitlist(session, body.email)
    except IntegrityError:
        raise HTTPException(status_code=409, detail="Email already on waitlist")
    return {"message": "Email added to waitlist"}


@router.put("/update/{token}", status_code=200)
async def update_waitlist_email(token: str, body: WaitlistUpdateRequest):
    return {"message": "To be implemented"}

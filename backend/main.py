from contextlib import asynccontextmanager

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from sqlalchemy.exc import IntegrityError

import models  # ensures all models are registered with Base before create_all
from database import AsyncSessionLocal, engine


@asynccontextmanager
async def lifespan(app: FastAPI):
    yield
    await engine.dispose()


app = FastAPI(title="Veriva API", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Veriva API is running"}


@app.get("/health")
async def health():
    return {"status": "ok"}


class WaitlistRequest(BaseModel):
    email: EmailStr


@app.post("/waitlist")
async def join_waitlist(body: WaitlistRequest):
    async with AsyncSessionLocal() as session:
        waitlist_entry = models.WaitList(email=body.email)
        session.add(waitlist_entry)
        try:
            await session.commit()
        except IntegrityError:
            raise HTTPException(status_code=409, detail="Email already on waitlist")
    return {"message": "Email added to waitlist"}

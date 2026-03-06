from pydantic import BaseModel, EmailStr


class WaitlistJoinRequest(BaseModel):
    email: EmailStr


class WaitlistUpdateRequest(BaseModel):
    product_updates: bool = True
    launch_updates: bool = True
    early_access_updates: bool = True
    tips_and_tricks_updates: bool = True

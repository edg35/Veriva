from datetime import datetime

from pydantic import BaseModel, EmailStr


class CreateRequestInput(BaseModel):
    renter_name: str
    renter_email: EmailStr
    monthly_rent: float | None = None


class VerificationRequestOut(BaseModel):
    id: str
    renter_name: str
    renter_email: str
    status: str
    created_at: datetime

    model_config = {"from_attributes": True}

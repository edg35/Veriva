import uuid

from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from database import Base


# TODO: Implement waitlist setting for users
class WaitList(Base):
    __tablename__ = "waitlist"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    unsubscribe_token: Mapped[str] = mapped_column(
        String(36), unique=True, index=True, default=lambda: str(uuid.uuid4()))
    product_updates: Mapped[bool] = mapped_column(default=True)
    launch_updates: Mapped[bool] = mapped_column(default=True)
    early_access_updates: Mapped[bool] = mapped_column(default=True)
    tips_and_tricks_updates: Mapped[bool] = mapped_column(default=True)
    created_at: Mapped[str] = mapped_column(String(255))
    updated_at: Mapped[str] = mapped_column(String(255))

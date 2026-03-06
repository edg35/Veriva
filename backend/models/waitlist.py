import uuid
from datetime import datetime

from sqlalchemy import Boolean, DateTime, String
from sqlalchemy.orm import Mapped, mapped_column

from models.base import Base, now_utc


class WaitList(Base):
    __tablename__ = "waitlist"

    id: Mapped[str] = mapped_column(
        String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    unsubscribe_token: Mapped[str] = mapped_column(
        String(36), unique=True, index=True, default=lambda: str(uuid.uuid4()))
    product_updates: Mapped[bool] = mapped_column(Boolean, default=True)
    launch_updates: Mapped[bool] = mapped_column(Boolean, default=True)
    early_access_updates: Mapped[bool] = mapped_column(Boolean, default=True)
    tips_and_tricks_updates: Mapped[bool] = mapped_column(Boolean, default=True)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=now_utc)
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=now_utc, onupdate=now_utc)

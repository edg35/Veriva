import uuid
from datetime import datetime

from sqlalchemy import JSON, DateTime, ForeignKey, Integer, Numeric, String
from sqlalchemy.orm import Mapped, mapped_column

from models.base import Base, now_utc


class VerificationRequests(Base):
    __tablename__ = "verification_requests"

    id: Mapped[str] = mapped_column(
        String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    organization_id: Mapped[str] = mapped_column(
        String(36), ForeignKey("organizations.id"), index=True)
    created_by: Mapped[str] = mapped_column(String(36), ForeignKey("users.id"))
    renter_name: Mapped[str] = mapped_column(String(255))
    renter_email: Mapped[str] = mapped_column(String(255))
    token: Mapped[str] = mapped_column(
        String(36), unique=True, index=True, default=lambda: str(uuid.uuid4()))
    status: Mapped[str] = mapped_column(String(20), default="pending")  # 'pending' | 'completed' | 'expired'
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=now_utc)
    expires_at: Mapped[datetime] = mapped_column(DateTime(timezone=True))
    completed_at: Mapped[datetime | None] = mapped_column(
        DateTime(timezone=True), nullable=True)


class IncomeReports(Base):
    __tablename__ = "income_reports"

    id: Mapped[str] = mapped_column(
        String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    verification_request_id: Mapped[str] = mapped_column(
        String(36), ForeignKey("verification_requests.id"))
    monthly_income_avg: Mapped[float] = mapped_column(Numeric(12, 2))
    income_sources: Mapped[dict] = mapped_column(JSON)
    months_analyzed: Mapped[int] = mapped_column(Integer)
    pass_fail: Mapped[str] = mapped_column(String(10))  # 'pass' | 'fail'
    raw_plaid_data: Mapped[dict] = mapped_column(JSON)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=now_utc)

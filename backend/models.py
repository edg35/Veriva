from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from database import Base


# TODO: Implement waitlist setting for users
class WaitList(Base):
    __tablename__ = "waitlist"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True)

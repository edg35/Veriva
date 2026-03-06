from sqlalchemy.ext.asyncio import AsyncSession

from models.waitlist import WaitList


async def add_to_waitlist(session: AsyncSession, email: str) -> WaitList:
    entry = WaitList(email=email)
    session.add(entry)
    await session.commit()
    return entry

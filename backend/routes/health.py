from fastapi import APIRouter

router = APIRouter()


@router.get("/")
async def root():
    return {"message": "Veriva API is running"}


@router.get("/health")
async def health():
    return {"status": "ok"}

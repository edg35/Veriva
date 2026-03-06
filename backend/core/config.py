import os

from dotenv import load_dotenv

load_dotenv()


class Settings:
    database_url: str

    def __init__(self) -> None:
        url = os.getenv(
            "DATABASE_URL",
            "postgresql+asyncpg://postgres:password@localhost:5432/veriva_db",
        )
        if url.startswith("postgresql://"):
            url = url.replace("postgresql://", "postgresql+asyncpg://", 1)
        self.database_url = url

    @property
    def cors_origins(self) -> list[str]:
        raw = os.getenv("CORS_ORIGINS", "http://localhost:3000")
        return [o.strip() for o in raw.split(",")]


settings = Settings()

from .dashboard import router as dashboard_router
from .health import router as health_router
from .waitlist import router as waitlist_router

__all__ = ["dashboard_router", "health_router", "waitlist_router"]

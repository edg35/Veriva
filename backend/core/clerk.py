"""Thin helper for calling Clerk's REST API."""
import os

import httpx

CLERK_SECRET_KEY = os.getenv("CLERK_SECRET_KEY", "")
_CLERK_API_BASE = "https://api.clerk.com/v1"


async def get_clerk_user(clerk_id: str) -> dict:
    """Fetch a user's profile from Clerk. Returns a dict with 'email', 'full_name'."""
    async with httpx.AsyncClient() as client:
        resp = await client.get(
            f"{_CLERK_API_BASE}/users/{clerk_id}",
            headers={"Authorization": f"Bearer {CLERK_SECRET_KEY}"},
            timeout=5.0,
        )
        resp.raise_for_status()
        data = resp.json()

    email_addresses = data.get("email_addresses", [])
    primary_id = data.get("primary_email_address_id")
    email = next(
        (e["email_address"] for e in email_addresses if e["id"] == primary_id),
        email_addresses[0]["email_address"] if email_addresses else "",
    )
    first = data.get("first_name") or ""
    last = data.get("last_name") or ""
    full_name = f"{first} {last}".strip() or None

    return {"email": email, "full_name": full_name}

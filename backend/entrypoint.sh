#!/bin/sh
set -e

# If alembic_version table doesn't exist but the DB has tables already (legacy state),
# stamp with the initial revision so Alembic doesn't try to re-create existing tables.
python - <<'EOF'
import os
from sqlalchemy import create_engine, text

url = os.environ["DATABASE_URL"].replace("postgresql+asyncpg://", "postgresql://")
engine = create_engine(url)
with engine.connect() as conn:
    has_alembic = conn.execute(text(
        "SELECT to_regclass('public.alembic_version')"
    )).scalar()
    has_waitlist = conn.execute(text(
        "SELECT to_regclass('public.waitlist')"
    )).scalar()

if not has_alembic and has_waitlist:
    import subprocess
    print("Stamping database with initial revision (legacy DB detected)...")
    subprocess.run(["python", "-m", "alembic", "stamp", "459e96bfd8e7"], check=True)
EOF

python -m alembic upgrade head
exec uvicorn main:app --host 0.0.0.0 --port "${PORT:-8000}"

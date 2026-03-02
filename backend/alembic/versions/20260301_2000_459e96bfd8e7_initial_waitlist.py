"""initial waitlist

Revision ID: 459e96bfd8e7
Revises:
Create Date: 2026-03-01 20:00:00.000000

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa

revision: str = "459e96bfd8e7"
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "waitlist",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("email", sa.String(length=255), nullable=False),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(op.f("ix_waitlist_id"), "waitlist", ["id"], unique=False)
    op.create_index(op.f("ix_waitlist_email"), "waitlist", ["email"], unique=True)


def downgrade() -> None:
    op.drop_index(op.f("ix_waitlist_email"), table_name="waitlist")
    op.drop_index(op.f("ix_waitlist_id"), table_name="waitlist")
    op.drop_table("waitlist")

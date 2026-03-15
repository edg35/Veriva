// app/(dashboard)/dashboard/page.tsx
// VER-20 — Landlord dashboard: requests list + empty state

import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────
export type RequestStatus = "pending" | "completed" | "expired";

export interface VerificationRequest {
    id: string;
    renter_name: string;
    renter_email: string;
    status: RequestStatus;
    created_at: string; // ISO string
}

// ─── Mock data (replace with real fetch once API is wired) ───────────────────
// When integrating: fetch("/api/v1/requests", { headers: { Authorization: ... } })
const MOCK_REQUESTS: VerificationRequest[] = [
    {
        id: "req_01",
        renter_name: "Alex Johnson",
        renter_email: "alex.j@gmail.com",
        status: "completed",
        created_at: "2026-03-12T10:22:00Z",
    },
    {
        id: "req_02",
        renter_name: "Maria Perez",
        renter_email: "mperez@outlook.com",
        status: "pending",
        created_at: "2026-03-11T14:05:00Z",
    },
    {
        id: "req_03",
        renter_name: "Sam Richards",
        renter_email: "sam.r@yahoo.com",
        status: "pending",
        created_at: "2026-03-11T09:41:00Z",
    },
    {
        id: "req_04",
        renter_name: "Priya Nair",
        renter_email: "priya.n@gmail.com",
        status: "completed",
        created_at: "2026-03-09T16:30:00Z",
    },
    {
        id: "req_05",
        renter_name: "Darnell Brooks",
        renter_email: "d.brooks@proton.me",
        status: "expired",
        created_at: "2026-02-28T11:00:00Z",
    },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

function initials(name: string): string {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
}

// ─── Status badge ─────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: RequestStatus }) {
    const config: Record<RequestStatus, { label: string; className: string }> = {
        pending: { label: "Pending", className: "dbp-badge dbp-badge--pending" },
        completed: { label: "Completed", className: "dbp-badge dbp-badge--completed" },
        expired: { label: "Expired", className: "dbp-badge dbp-badge--expired" },
    };
    const { label, className } = config[status];
    return <span className={className}>{label}</span>;
}

// ─── Empty state ─────────────────────────────────────────────────────────────
function EmptyState() {
    return (
        <div className="dbp-empty">
            <div className="dbp-empty-icon">
                {/* Envelope with arrow */}
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="10" fill="#e8f2ec" />
                    <rect x="8" y="13" width="20" height="15" rx="2" fill="white" stroke="#1a6b4a" strokeWidth="1.5" />
                    <polyline points="8,13 18,21 28,13" stroke="#1a6b4a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    <circle cx="30" cy="27" r="6" fill="#1a6b4a" />
                    <path d="M28 27h4M30 25l2 2-2 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <h3 className="dbp-empty-title">No verification requests yet</h3>
            <p className="dbp-empty-body">
                Send your first one and your applicant will receive a secure link to connect their bank account via Plaid.
            </p>
            <Link href="/dashboard/new" className="dbp-btn dbp-btn--primary">
                Send your first request →
            </Link>
        </div>
    );
}

// ─── Requests table (desktop) ────────────────────────────────────────────────
function RequestsTable({ requests }: { requests: VerificationRequest[] }) {
    return (
        <div className="dbp-table-wrap">
            <table className="dbp-table">
                <thead>
                    <tr>
                        <th>Applicant</th>
                        <th>Status</th>
                        <th>Date sent</th>
                        <th aria-label="Actions" />
                    </tr>
                </thead>
                <tbody>
                    {requests.map((req) => (
                        <tr key={req.id}>
                            {/* Applicant */}
                            <td>
                                <div className="dbp-applicant">
                                    <div className="dbp-avatar">{initials(req.renter_name)}</div>
                                    <div className="dbp-applicant-info">
                                        <span className="dbp-applicant-name">{req.renter_name}</span>
                                        <span className="dbp-applicant-email">{req.renter_email}</span>
                                    </div>
                                </div>
                            </td>

                            {/* Status */}
                            <td>
                                <StatusBadge status={req.status} />
                            </td>

                            {/* Date */}
                            <td className="dbp-date">{formatDate(req.created_at)}</td>

                            {/* Actions */}
                            <td className="dbp-actions-cell">
                                {req.status === "completed" ? (
                                    <Link
                                        href={`/dashboard/requests/${req.id}`}
                                        className="dbp-link"
                                    >
                                        View Report →
                                    </Link>
                                ) : req.status === "pending" ? (
                                    <button className="dbp-link dbp-link--muted">Resend link</button>
                                ) : null}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// ─── Requests cards (mobile) ──────────────────────────────────────────────────
function RequestCards({ requests }: { requests: VerificationRequest[] }) {
    return (
        <div className="dbp-cards">
            {requests.map((req) => (
                <div key={req.id} className="dbp-card">
                    <div className="dbp-card-top">
                        <div className="dbp-applicant">
                            <div className="dbp-avatar">{initials(req.renter_name)}</div>
                            <div className="dbp-applicant-info">
                                <span className="dbp-applicant-name">{req.renter_name}</span>
                                <span className="dbp-applicant-email">{req.renter_email}</span>
                            </div>
                        </div>
                        <StatusBadge status={req.status} />
                    </div>
                    <div className="dbp-card-bottom">
                        <span className="dbp-date">Sent {formatDate(req.created_at)}</span>
                        {req.status === "completed" && (
                            <Link href={`/dashboard/requests/${req.id}`} className="dbp-link">
                                View Report →
                            </Link>
                        )}
                        {req.status === "pending" && (
                            <button className="dbp-link dbp-link--muted">Resend link</button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function DashboardPage() {
    // TODO: replace mock data with real API fetch
    // const requests = await fetch("/api/v1/requests").then(r => r.json());
    const requests = MOCK_REQUESTS;

    const stats = {
        total: requests.length,
        pending: requests.filter((r) => r.status === "pending").length,
        completed: requests.filter((r) => r.status === "completed").length,
    };

    return (
        <div className="dbp-page">
            {/* ── Header ── */}
            <div className="dbp-header">
                <div className="dbp-header-text">
                    <h1 className="dbp-page-title">Dashboard</h1>
                    <p className="dbp-page-sub">Manage your verification requests</p>
                </div>
                <Link href="/dashboard/new" className="dbp-btn dbp-btn--primary">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    New Request
                </Link>
            </div>

            {/* ── Stats strip ── */}
            <div className="dbp-stats">
                <div className="dbp-stat">
                    <span className="dbp-stat-value">{stats.total}</span>
                    <span className="dbp-stat-label">Total requests</span>
                </div>
                <div className="dbp-stat-divider" />
                <div className="dbp-stat">
                    <span className="dbp-stat-value dbp-stat-value--accent">{stats.completed}</span>
                    <span className="dbp-stat-label">Completed</span>
                </div>
                <div className="dbp-stat-divider" />
                <div className="dbp-stat">
                    <span className="dbp-stat-value">{stats.pending}</span>
                    <span className="dbp-stat-label">Awaiting response</span>
                </div>
            </div>

            {/* ── Content: empty state or list ── */}
            {requests.length === 0 ? (
                <EmptyState />
            ) : (
                <div className="dbp-list-panel">
                    <div className="dbp-list-header">
                        <h2 className="dbp-list-title">All requests</h2>
                    </div>
                    {/* Desktop table */}
                    <RequestsTable requests={requests} />
                    {/* Mobile cards */}
                    <RequestCards requests={requests} />
                </div>
            )}
        </div>
    );
}
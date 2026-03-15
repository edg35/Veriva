"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// ─── Veriva logo mark (matches landing page exactly) ─────────────────────────
function LogoMark() {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="7" fill="#1a6b4a" />
            <path d="M7 13 L12 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M12 20 Q14 20 22 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    );
}

// ─── Icons ───────────────────────────────────────────────────────────────────
function IconGrid({ size = 16 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
        </svg>
    );
}

function IconPlus({ size = 16 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
        </svg>
    );
}

function IconSettings({ size = 16 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14M12 2v2M12 20v2M2 12h2M20 12h2" />
        </svg>
    );
}

function IconLogout({ size = 15 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
    );
}

function IconMenu({ size = 20 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
        </svg>
    );
}

function IconX({ size = 20 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
}

// ─── Nav config ───────────────────────────────────────────────────────────────
const NAV = [
    { href: "/dashboard", label: "Dashboard", Icon: IconGrid },
    { href: "/dashboard/new", label: "New Request", Icon: IconPlus },
    { href: "/dashboard/settings", label: "Settings", Icon: IconSettings },
];

// ─── Sidebar content (shared between desktop + mobile drawer) ────────────────
function SidebarContent({
    pathname,
    onNavigate,
}: {
    pathname: string;
    onNavigate?: () => void;
}) {
    return (
        <>
            {/* Logo */}
            <div className="dbl-logo">
                <LogoMark />
                <span className="dbl-wordmark">Veriva</span>
            </div>

            {/* Nav */}
            <nav className="dbl-nav">
                {NAV.map(({ href, label, Icon }) => {
                    // exact match for dashboard root, prefix match for sub-routes
                    const isActive =
                        href === "/dashboard"
                            ? pathname === "/dashboard"
                            : pathname.startsWith(href);

                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`dbl-nav-item${isActive ? " dbl-nav-item--active" : ""}`}
                            onClick={onNavigate}
                        >
                            <span className="dbl-nav-icon">
                                <Icon />
                            </span>
                            {label}
                        </Link>
                    );
                })}
            </nav>

            {/* Footer / user */}
            <div className="dbl-footer">
                {/* 
          Replace this placeholder with:
            const { user } = useUser(); // from @clerk/nextjs
          and render user.firstName + user.imageUrl
        */}
                <div className="dbl-user">
                    <div className="dbl-avatar">JD</div>
                    <div className="dbl-user-info">
                        <span className="dbl-user-name">James Donovan</span>
                        <span className="dbl-user-org">Donovan Properties</span>
                    </div>
                </div>
                <button className="dbl-logout" title="Sign out" aria-label="Sign out">
                    <IconLogout />
                </button>
            </div>
        </>
    );
}

// ─── Layout ───────────────────────────────────────────────────────────────────
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="dbl-root">
            {/* ── Desktop sidebar ── */}
            <aside className="dbl-sidebar">
                <SidebarContent pathname={pathname} />
            </aside>

            {/* ── Mobile drawer backdrop ── */}
            {mobileOpen && (
                <div
                    className="dbl-mobile-backdrop"
                    onClick={() => setMobileOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* ── Mobile drawer ── */}
            <aside className={`dbl-mobile-drawer${mobileOpen ? " dbl-mobile-drawer--open" : ""}`}>
                <button
                    className="dbl-mobile-close"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                >
                    <IconX />
                </button>
                <SidebarContent
                    pathname={pathname}
                    onNavigate={() => setMobileOpen(false)}
                />
            </aside>

            {/* ── Main area ── */}
            <div className="dbl-body">
                {/* Mobile top bar */}
                <header className="dbl-mobile-topbar">
                    <button
                        className="dbl-hamburger"
                        onClick={() => setMobileOpen(true)}
                        aria-label="Open menu"
                    >
                        <IconMenu />
                    </button>
                    <div className="dbl-mobile-logo">
                        <LogoMark />
                        <span className="dbl-wordmark">Veriva</span>
                    </div>
                    {/* spacer */}
                    <div style={{ width: 36 }} />
                </header>

                {/* Page content */}
                <main className="dbl-main">{children}</main>
            </div>
        </div>
    );
}
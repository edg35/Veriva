"use client";
// app/(dashboard)/dashboard/new/page.tsx
// VER-21 — New verification request form

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────
function IconArrowLeft() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
        </svg>
    );
}

function IconShield() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
    );
}

function IconSpinner() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="dbf-spinner">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
    );
}

// ─── Form field component ─────────────────────────────────────────────────────
function Field({
    label,
    id,
    optional,
    hint,
    error,
    children,
}: {
    label: string;
    id: string;
    optional?: boolean;
    hint?: string;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="dbf-field">
            <label htmlFor={id} className="dbf-label">
                {label}
                {optional && <span className="dbf-label-opt"> (optional)</span>}
            </label>
            {children}
            {hint && !error && <p className="dbf-hint">{hint}</p>}
            {error && <p className="dbf-error" role="alert">{error}</p>}
        </div>
    );
}

// ─── Validation ───────────────────────────────────────────────────────────────
function validate(name: string, email: string): Record<string, string> {
    const errors: Record<string, string> = {};
    if (!name.trim()) errors.name = "Applicant name is required.";
    if (!email.trim()) {
        errors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = "Please enter a valid email address.";
    }
    return errors;
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function NewRequestPage() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rent, setRent] = useState("");

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setApiError(null);

        const fieldErrors = validate(name, email);
        if (Object.keys(fieldErrors).length > 0) {
            setErrors(fieldErrors);
            return;
        }
        setErrors({});
        setLoading(true);

        try {
            // TODO: uncomment when API is ready
            // const res = await fetch("/api/v1/requests", {
            //   method: "POST",
            //   headers: { "Content-Type": "application/json" },
            //   body: JSON.stringify({
            //     renter_name: name.trim(),
            //     renter_email: email.trim(),
            //     ...(rent ? { monthly_rent: parseFloat(rent) } : {}),
            //   }),
            // });
            // if (!res.ok) {
            //   const data = await res.json();
            //   throw new Error(data?.detail || "Something went wrong.");
            // }

            // Simulate network delay for mock
            await new Promise((r) => setTimeout(r, 900));

            // On success, redirect to dashboard
            // A real implementation would pass a toast via a search param or global state:
            // router.push("/dashboard?toast=sent");
            router.push("/dashboard");
        } catch (err: unknown) {
            setApiError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    const isReady = name.trim().length > 0 && email.trim().length > 0;

    return (
        <div className="dbf-page">
            {/* Back link */}
            <Link href="/dashboard" className="dbf-back">
                <IconArrowLeft /> Back to dashboard
            </Link>

            {/* Card */}
            <div className="dbf-card">
                {/* Card header */}
                <div className="dbf-card-header">
                    <div className="dbf-card-icon">
                        {/* Envelope send icon */}
                        <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
                            <rect x="2" y="8" width="27" height="20" rx="3" fill="white" stroke="#1a6b4a" strokeWidth="2" />
                            <polyline points="2,8 15.5,19 29,8" stroke="#1a6b4a" strokeWidth="2" fill="none" strokeLinecap="round" />
                            <circle cx="33" cy="28" r="7" fill="#1a6b4a" />
                            <path d="M30 28h6M33 25l3 3-3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h1 className="dbf-title">New verification request</h1>
                    <p className="dbf-subtitle">
                        We'll send your applicant a secure link to connect their bank account via Plaid — no documents to collect, no spreadsheets to check.
                    </p>
                </div>

                {/* Form */}
                <form className="dbf-form" onSubmit={handleSubmit} noValidate>
                    <Field
                        label="Applicant full name"
                        id="renter_name"
                        error={errors.name}
                    >
                        <input
                            id="renter_name"
                            className={`dbf-input${errors.name ? " dbf-input--error" : ""}`}
                            type="text"
                            placeholder="Alex Johnson"
                            value={name}
                            onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: "" })); }}
                            autoComplete="off"
                            disabled={loading}
                        />
                    </Field>

                    <Field
                        label="Email address"
                        id="renter_email"
                        hint="The verification link will be sent to this address."
                        error={errors.email}
                    >
                        <input
                            id="renter_email"
                            className={`dbf-input${errors.email ? " dbf-input--error" : ""}`}
                            type="email"
                            placeholder="alex@email.com"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: "" })); }}
                            autoComplete="off"
                            disabled={loading}
                        />
                    </Field>

                    <Field
                        label="Monthly rent amount"
                        id="monthly_rent"
                        optional
                        hint="Used to calculate whether the applicant meets the 3× income threshold."
                    >
                        <div className="dbf-input-prefix-wrap">
                            <span className="dbf-input-prefix">$</span>
                            <input
                                id="monthly_rent"
                                className="dbf-input dbf-input--prefixed"
                                type="number"
                                min="0"
                                step="50"
                                placeholder="2,000"
                                value={rent}
                                onChange={(e) => setRent(e.target.value)}
                                disabled={loading}
                            />
                        </div>
                    </Field>

                    {/* API-level error */}
                    {apiError && (
                        <div className="dbf-api-error" role="alert">
                            {apiError}
                        </div>
                    )}

                    {/* Submit */}
                    <button
                        type="submit"
                        className={`dbf-btn dbf-btn--primary dbf-btn--full${loading ? " dbf-btn--loading" : ""}`}
                        disabled={loading || !isReady}
                    >
                        {loading ? (
                            <>
                                <IconSpinner /> Sending request…
                            </>
                        ) : (
                            "Send Verification Request"
                        )}
                    </button>
                </form>

                {/* Trust note */}
                <div className="dbf-trust">
                    <span className="dbf-trust-icon"><IconShield /></span>
                    <p>
                        Your applicant connects their bank directly through Plaid's secure interface. Veriva receives a read-only report — no account numbers, no credentials, no ability to move funds.
                    </p>
                </div>
            </div>
        </div>
    );
}
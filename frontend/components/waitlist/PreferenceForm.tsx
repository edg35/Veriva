'use client';

import { useEffect, useState } from 'react';

type PreferenceFormProps = {
    email: string;
    product_updates: boolean;
    launch_updates: boolean;
    early_access: boolean;
    tips_tutorials: boolean;
    unsubscribe: boolean;
}

const PREFERENCES = [
    {
        key: 'product_updates',
        label: 'Product updates',
        description: 'Feature releases, improvements, and changelog updates.',
    },
    {
        key: 'launch_updates',
        label: 'Launch updates',
        description: 'Be the first to know when Veriva goes live.',
    },
    {
        key: 'early_access',
        label: 'Early access invites',
        description: 'Invitations to beta programs and early feature previews.',
    },
    {
        key: 'tips_tutorials',
        label: 'Tips & tutorials',
        description: 'Best practices for income verification and tenant screening.',
    },
] as const

export default function PreferenceForm({ token }: { token: string }) {
    const [prefs, setPrefs] = useState<PreferenceFormProps | null>(null);
    const [status, setStatus] = useState<'loading' | 'saving' | 'saved' | 'error' | 'ready'>('loading');
    const [invalid, setInvalid] = useState(false);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/waitlist/${token}`)
            .then((res) => {
                if (!res.ok) {
                    setInvalid(true);
                    setStatus('error');
                    return;
                }
                return res.json();
            })
            .then((data) => {
                setPrefs(data);
                setStatus('ready');
            })
            .catch(() => {
                setInvalid(true);
                setStatus('error');
            });
    }, [token]);

    async function handleToggle(key: keyof PreferenceFormProps) {
        if (!prefs) return;
        const updated = { ...prefs, [key]: !prefs[key as keyof PreferenceFormProps] };
        setPrefs(updated);
    }

    async function handleUnsubscribeAll() {
        if (!prefs) return;
        const updated = {
            ...prefs,
            product_updates: false,
            launch_updates: false,
            early_access: false,
            tips_tutorials: false,
            unsubscribe: true
        };
        setPrefs(updated);
    }

    async function handleSave() {
        if (!prefs) return;
        setStatus('saving');

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/waitlist/update/${token}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    product_updates: prefs.product_updates,
                    launch_updates: prefs.launch_updates,
                    early_access: prefs.early_access,
                    tips_tutorials: prefs.tips_tutorials,
                    unsubscribe: prefs.unsubscribe
                }),
            });

            if (!res.ok) {
                throw new Error('Failed to save preferences');
            }

            setStatus('saved');
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    }

    if (invalid) {
        return (
            <div className="pref-invalid-page">
                <div className="pref-invalid-card">
                    <h1>Invalid token</h1>
                    <p>The token provided is invalid. Please check your email and try again.</p>
                </div>
            </div>
        )
    }

    if (status === 'loading') {
        return (
            <div className="pref-loading">
                <div className="pref-spinner" />
            </div>
        )
    }

    return (
        <div className="pref-page">

            {/* Logo */}
            <div className="pref-logo">
                <svg width="110" height="32" viewBox="0 0 110 32" fill="none">
                    <path d="M5 13 L13 24" stroke="#1a6b4a" strokeWidth="4.5" strokeLinecap="round" />
                    <path d="M13 24 Q16 24 26 4" stroke="#1a6b4a" strokeWidth="4.5" strokeLinecap="round" />
                    <text x="34" y="22" fontFamily="DM Serif Display, serif" fontSize="18" fill="#0e0e0f" letterSpacing="-0.4">Veriva</text>
                </svg>
            </div>

            <div className="pref-card">

                {/* Header */}
                <p className="pref-eyebrow">Email preferences</p>
                <h1 className="pref-title">Manage your emails</h1>
                <p className="pref-subtitle">
                    Managing preferences for <span className="pref-email">{prefs?.email}</span>
                </p>

                {/* Preference toggles */}
                <div className="pref-toggles">
                    {PREFERENCES.map(({ key, label, description }) => (
                        <div
                            key={key}
                            className="pref-toggle-row"
                            onClick={() => handleToggle(key as keyof PreferenceFormProps)}
                        >
                            <div>
                                <p className="pref-toggle-label">{label}</p>
                                <p className="pref-toggle-desc">{description}</p>
                            </div>
                            {/* Toggle */}
                            <div className={`pref-toggle-track${prefs?.[key as keyof PreferenceFormProps] ? ' pref-toggle-track--on' : ''}`}>
                                <div className={`pref-toggle-thumb${prefs?.[key as keyof PreferenceFormProps] ? ' pref-toggle-thumb--on' : ''}`} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Save button */}
                <button
                    onClick={handleSave}
                    disabled={status === 'saving'}
                    className="pref-save-btn"
                >
                    {status === 'saving' ? 'Saving...' : status === 'saved' ? '✓ Preferences saved' : 'Save preferences'}
                </button>

                {/* Unsubscribe all */}
                <button
                    onClick={handleUnsubscribeAll}
                    className="pref-unsub-btn"
                >
                    Unsubscribe from all emails
                </button>

                {status === 'error' && (
                    <p className="pref-error">Something went wrong. Please try again.</p>
                )}
            </div>

            <p className="pref-footer">© 2026 Veriva · All rights reserved</p>
        </div>
    )


}

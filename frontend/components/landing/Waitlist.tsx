'use client'

import { useState } from 'react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  async function handleSignup() {
    if (!email || !email.includes('@')) {
      setError(true)
      setTimeout(() => setError(false), 1500)
      return
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/waitlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    if (res.ok) {
      setSubmitted(true)
    } else {
      setError(true)
      setTimeout(() => setError(false), 1500)
    }
  }

  return (
    <section id="waitlist">
      <div className="cta-section">
        <p className="section-label">Early access</p>
        <h2>Be the first to know when Veriva launches.</h2>
        <p>
          We&apos;re onboarding a small group of landlords and property managers
          to shape the product. Join the waitlist for free early access.
        </p>

        {submitted ? (
          <p className="success-msg">✓ You&apos;re on the list! We&apos;ll be in touch soon.</p>
        ) : (
          <div className="waitlist-form">
            <input
              type="email"
              className={`waitlist-input${error ? ' error' : ''}`}
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSignup()}
            />
            <button className="btn btn-primary btn-lg" onClick={handleSignup}>
              Request early access
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

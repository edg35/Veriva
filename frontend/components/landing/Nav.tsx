'use client'
import Link from 'next/link'
import { useState } from 'react'

const LogoMark = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="7" fill="#1a6b4a" />
    <path d="M8 14 L14 22" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M14 22 Q16 22 25 7" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
)

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)

  return (
    <>
      <nav className="nav">
        <Link href="/" className="logo" onClick={close}>
          <LogoMark />
          Veriva
        </Link>
        <ul className="nav-links">
          <li><Link href="/how-it-works">How it works</Link></li>
          <li><a href="#for-who">Who it&apos;s for</a></li>
          <li><a href="#waitlist">Get early access</a></li>
        </ul>
        <a href="#waitlist" className="btn btn-primary nav-cta">
          Join Waitlist
        </a>
        <button
          className={`nav-hamburger${isOpen ? ' nav-hamburger--open' : ''}`}
          onClick={() => setIsOpen(o => !o)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-mobile${isOpen ? ' nav-mobile--open' : ''}`} aria-hidden={!isOpen}>
        <ul className="nav-mobile-links">
          <li><Link href="/how-it-works" onClick={close}>How it works</Link></li>
          <li><a href="#for-who" onClick={close}>Who it&apos;s for</a></li>
          <li><a href="#waitlist" onClick={close}>Get early access</a></li>
        </ul>
        <a href="#waitlist" className="btn btn-primary btn-lg nav-mobile-cta" onClick={close}>
          Join Waitlist
        </a>
      </div>

      {/* Backdrop */}
      {isOpen && <div className="nav-backdrop" onClick={close} />}
    </>
  )
}

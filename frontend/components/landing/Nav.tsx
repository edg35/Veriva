'use client'

import Link from 'next/link'

const LogoMark = () => (
  <div className="logo-mark">
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 8l3.5 3.5L13 4.5"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
)

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="logo">
        <LogoMark />
        Veriva
      </Link>

      <ul className="nav-links">
        <li><a href="#how-it-works">How it works</a></li>
        <li><a href="#for-who">Who it&apos;s for</a></li>
        <li><a href="#waitlist">Get early access</a></li>
      </ul>

      <a href="#waitlist" className="btn btn-primary">
        Join Waitlist
      </a>
    </nav>
  )
}

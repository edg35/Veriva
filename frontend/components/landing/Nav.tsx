'use client'
import Link from 'next/link'

const LogoMark = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="7" fill="#1a6b4a" />
    <path d="M8 14 L14 22" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M14 22 Q16 22 25 7" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
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
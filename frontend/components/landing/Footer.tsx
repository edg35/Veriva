import Link from 'next/link'

const LogoMark = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="7" fill="#1a6b4a" />
    <path d="M8 14 L14 22" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M14 22 Q16 22 25 7" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
)

export default function Footer() {
  return (
    <footer>
      <Link href="/" className="logo">
        <LogoMark />
        Veriva
      </Link>
      <p>© {new Date().getFullYear()} Veriva. All rights reserved.</p>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <Link href="/privacy" style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none' }}>
          Privacy Policy
        </Link>
        <Link href="/terms" style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none' }}>
          Terms of Service
        </Link>
      </div>
      <p style={{ fontSize: '12px', color: '#bbb' }}>
        Powered by Plaid · Built for real estate professionals
      </p>
    </footer>
  )
}
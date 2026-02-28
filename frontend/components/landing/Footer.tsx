import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <Link href="/" className="logo">
        <div className="logo-mark">
          <svg viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8l3.5 3.5L13 4.5"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        Veriva
      </Link>
      <p>© {new Date().getFullYear()} Veriva. All rights reserved.</p>
      <p style={{ fontSize: '12px', color: '#bbb' }}>
        Powered by Plaid · Built for real estate professionals
      </p>
    </footer>
  )
}

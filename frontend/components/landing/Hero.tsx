export default function Hero() {
  return (
    <div className="hero-wrap">
      {/* Left: text content */}
      <div className="hero-content">
        <span className="hero-eyebrow">Rental Income Verification</span>

        <h1>
          Verify income.<br />
          <em>Eliminate fraud.</em><br />
          Close faster.
        </h1>

        <p className="hero-sub">
          Veriva connects directly to applicants&apos; bank accounts to generate
          tamper-proof income verification reports — no paystubs, no
          spreadsheets, no guessing.
        </p>

        <div className="hero-cta">
          <a href="#waitlist" className="btn btn-primary btn-lg">
            Join the waitlist
          </a>
          <a href="#how-it-works" className="btn btn-outline btn-lg">
            See how it works
          </a>
        </div>

        <p className="hero-note">Free during early access · No credit card required</p>

        <div className="hero-stats">
          <div>
            <div className="stat-value">~30%</div>
            <div className="stat-label">
              of rental applications contain<br />falsified income documents
            </div>
          </div>
          <div>
            <div className="stat-value">72 hrs</div>
            <div className="stat-label">
              average time saved per<br />verification with Veriva
            </div>
          </div>
          <div>
            <div className="stat-value">Bank-level</div>
            <div className="stat-label">
              encryption on all<br />financial data via Plaid
            </div>
          </div>
        </div>
      </div>

      {/* Right: SVG illustration */}
      <div className="hero-visual">
        <div className="hero-svg-wrap">
          <svg viewBox="0 0 520 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-illustration">
            <defs>
              <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1a6b4a" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#1a6b4a" stopOpacity="0" />
              </radialGradient>
              <filter id="blur4">
                <feGaussianBlur stdDeviation="4" />
              </filter>
              <linearGradient id="cardGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#f7f6f2" />
              </linearGradient>
              <linearGradient id="barGrad" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#1a6b4a" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#1a6b4a" stopOpacity="1" />
              </linearGradient>
              <clipPath id="cardClip">
                <rect x="130" y="120" width="260" height="245" rx="16" />
              </clipPath>
            </defs>

            {/* Background glow */}
            <ellipse cx="260" cy="240" rx="220" ry="200" fill="url(#glow1)" />

            {/* Subtle grid */}
            <g opacity="0.08" stroke="#1a6b4a" strokeWidth="0.5">
              <line x1="60" y1="60" x2="460" y2="60" /><line x1="60" y1="120" x2="460" y2="120" />
              <line x1="60" y1="180" x2="460" y2="180" /><line x1="60" y1="240" x2="460" y2="240" />
              <line x1="60" y1="300" x2="460" y2="300" /><line x1="60" y1="360" x2="460" y2="360" />
              <line x1="60" y1="420" x2="460" y2="420" />
              <line x1="100" y1="40" x2="100" y2="440" /><line x1="180" y1="40" x2="180" y2="440" />
              <line x1="260" y1="40" x2="260" y2="440" /><line x1="340" y1="40" x2="340" y2="440" />
              <line x1="420" y1="40" x2="420" y2="440" />
            </g>

            {/* Main verification card */}
            <rect x="130" y="120" width="260" height="245" rx="16" fill="url(#cardGrad)" stroke="#e0ddd6" strokeWidth="1" />
            <rect x="130" y="120" width="260" height="5" fill="#1a6b4a" clipPath="url(#cardClip)" />
            <text x="152" y="152" fontFamily="DM Sans, sans-serif" fontSize="11" fontWeight="500" fill="#7a7a7a" letterSpacing="1">INCOME VERIFICATION</text>
            <rect x="310" y="138" width="66" height="22" rx="11" fill="#e8f2ec" />
            <text x="343" y="153" fontFamily="DM Sans, sans-serif" fontSize="10" fontWeight="500" fill="#1a6b4a" textAnchor="middle">✓ Verified</text>
            <text x="152" y="196" fontFamily="DM Serif Display, serif" fontSize="36" fill="#0e0e0f" letterSpacing="-1">$7,480</text>
            <text x="152" y="216" fontFamily="DM Sans, sans-serif" fontSize="12" fill="#7a7a7a" fontWeight="300">Monthly income · 3-month avg</text>

            {/* Bar chart */}
            <g transform="translate(152, 232)">
              <rect x="0" y="32" width="18" height="28" rx="3" fill="url(#barGrad)" opacity="0.6" />
              <rect x="24" y="18" width="18" height="42" rx="3" fill="url(#barGrad)" opacity="0.7" />
              <rect x="48" y="8" width="18" height="52" rx="3" fill="url(#barGrad)" opacity="0.8" />
              <rect x="72" y="14" width="18" height="46" rx="3" fill="url(#barGrad)" opacity="0.75" />
              <rect x="96" y="4" width="18" height="56" rx="3" fill="url(#barGrad)" />
              <rect x="120" y="10" width="18" height="50" rx="3" fill="url(#barGrad)" opacity="0.9" />
              <polyline points="9,36 33,22 57,12 81,18 105,8 129,14" stroke="#1a6b4a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="36" r="3" fill="#1a6b4a" />
              <circle cx="57" cy="12" r="3" fill="#1a6b4a" />
              <circle cx="105" cy="8" r="4" fill="#1a6b4a" />
              <circle cx="129" cy="14" r="3" fill="#1a6b4a" />
            </g>

            {/* Divider + stats */}
            <line x1="152" y1="308" x2="370" y2="308" stroke="#e0ddd6" strokeWidth="1" />
            <text x="152" y="325" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#7a7a7a">Sources</text>
            <text x="152" y="340" fontFamily="DM Serif Display, serif" fontSize="16" fill="#0e0e0f">4 employers</text>
            <text x="280" y="325" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#7a7a7a">Consistency</text>
            <text x="280" y="340" fontFamily="DM Serif Display, serif" fontSize="16" fill="#0e0e0f">94%</text>

            {/* Floating: Bank card */}
            <rect x="36" y="68" width="162" height="70" rx="12" fill="white" stroke="#e0ddd6" strokeWidth="1" filter="url(#blur4)" />
            <rect x="36" y="68" width="162" height="70" rx="12" fill="white" stroke="#e0ddd6" strokeWidth="1" />
            <rect x="54" y="86" width="32" height="32" rx="8" fill="#e8f2ec" />
            <text x="70" y="106" textAnchor="middle" fontSize="16">🏦</text>
            <text x="98" y="95" fontFamily="DM Sans, sans-serif" fontSize="11" fontWeight="500" fill="#0e0e0f">Chase Bank</text>
            <text x="98" y="110" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#7a7a7a" fontWeight="300">Connected via Plaid</text>
            <rect x="140" y="121" width="42" height="14" rx="7" fill="#e8f2ec" />
            <text x="161" y="132" fontFamily="DM Sans, sans-serif" fontSize="8.5" fontWeight="500" fill="#1a6b4a" textAnchor="middle">Secure</text>

            {/* Floating: Report ready */}
            <rect x="326" y="360" width="154" height="70" rx="12" fill="white" stroke="#e0ddd6" strokeWidth="1" />
            <rect x="344" y="378" width="32" height="32" rx="8" fill="#0e0e0f" />
            <text x="360" y="390" textAnchor="middle" fontSize="14">📄</text>
            <text x="388" y="390" fontFamily="DM Sans, sans-serif" fontSize="11" fontWeight="500" fill="#0e0e0f">Report ready</text>
            <text x="388" y="405" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#7a7a7a" fontWeight="300">Download PDF</text>
            <circle cx="470" cy="390" r="6" fill="#1a6b4a" />
            <text x="470" y="393" textAnchor="middle" fontSize="8" fill="white">↓</text>

            {/* Floating: Applicant */}
            <rect x="326" y="56" width="154" height="60" rx="12" fill="white" stroke="#e0ddd6" strokeWidth="1" />
            <circle cx="354" cy="86" r="16" fill="#e8f2ec" />
            <text x="354" y="90" textAnchor="middle" fontSize="14">👤</text>
            <text x="380" y="80" fontFamily="DM Sans, sans-serif" fontSize="11" fontWeight="500" fill="#0e0e0f">Alex Johnson</text>
            <text x="380" y="95" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#7a7a7a" fontWeight="300">Link sent · 2m ago</text>

            {/* Animated connection lines */}
            <path d="M 198 103 Q 218 112 228 136" stroke="#1a6b4a" strokeWidth="1.5" fill="none" strokeDasharray="4,4" opacity="0.5">
              <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.5s" repeatCount="indefinite" />
            </path>
            <path d="M 390 116 Q 388 120 382 130" stroke="#1a6b4a" strokeWidth="1.5" fill="none" strokeDasharray="4,4" opacity="0.5">
              <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.8s" repeatCount="indefinite" />
            </path>
            <path d="M 390 350 Q 425 352 430 375" stroke="#1a6b4a" strokeWidth="1.5" fill="none" strokeDasharray="4,4" opacity="0.5">
              <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite" />
            </path>

            {/* Decorative dots */}
            <circle cx="80" cy="300" r="3" fill="#1a6b4a" opacity="0.3" />
            <circle cx="60" cy="360" r="2" fill="#1a6b4a" opacity="0.2" />
            <circle cx="460" cy="200" r="4" fill="#1a6b4a" opacity="0.2" />
            <circle cx="440" cy="280" r="2.5" fill="#1a6b4a" opacity="0.3" />
          </svg>
        </div>
      </div>
    </div>
  )
}

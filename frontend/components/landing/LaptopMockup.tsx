export default function LaptopMockup() {
  return (
    <section className="laptop-section">
      <div className="laptop-inner">
        <p className="section-label">Product preview</p>
        <h2>Your verification dashboard, <em>at a glance.</em></h2>
        <p>Real-time status on every verification request, income summaries, and audit-ready reports — all in one place.</p>

        <div className="laptop-wrap reveal">
          <svg viewBox="0 0 860 540" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
            <defs>
              <linearGradient id="laptopBody" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2a2a2c" />
                <stop offset="100%" stopColor="#1a1a1c" />
              </linearGradient>
              <linearGradient id="laptopBase" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#333336" />
                <stop offset="100%" stopColor="#222224" />
              </linearGradient>
              <linearGradient id="screenBg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f7f6f2" />
                <stop offset="100%" stopColor="#f0efe9" />
              </linearGradient>
              <linearGradient id="sidebarGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0e0e0f" />
                <stop offset="100%" stopColor="#1a1a1c" />
              </linearGradient>
              <linearGradient id="chartLineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1a6b4a" />
                <stop offset="100%" stopColor="#4ebe8a" />
              </linearGradient>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1a6b4a" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#1a6b4a" stopOpacity="0" />
              </linearGradient>
              <clipPath id="screenClip">
                <rect x="111" y="34" width="638" height="398" rx="4" />
              </clipPath>
            </defs>

            {/* Laptop lid */}
            <rect x="90" y="18" width="680" height="428" rx="14" fill="url(#laptopBody)" />
            <circle cx="430" cy="26" r="3" fill="#444" />
            <rect x="106" y="30" width="648" height="410" rx="8" fill="#111" />
            <rect x="111" y="34" width="638" height="398" rx="4" fill="url(#screenBg)" />

            <g clipPath="url(#screenClip)">
              {/* Sidebar */}
              <rect x="111" y="34" width="158" height="398" fill="url(#sidebarGrad)" />
              <rect x="127" y="54" width="20" height="20" rx="5" fill="#1a6b4a" />
              <path d="M131 64l2.5 2.5 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <text x="154" y="68" fontFamily="DM Serif Display, serif" fontSize="13" fill="white">Veriva</text>
              <rect x="119" y="94" width="142" height="28" rx="6" fill="white" fillOpacity="0.1" />
              <text x="139" y="112" fontFamily="DM Sans, sans-serif" fontSize="11" fill="white" fontWeight="500">Dashboard</text>
              <text x="139" y="140" fontFamily="DM Sans, sans-serif" fontSize="11" fill="rgba(255,255,255,0.4)">Verifications</text>
              <text x="139" y="164" fontFamily="DM Sans, sans-serif" fontSize="11" fill="rgba(255,255,255,0.4)">Reports</text>
              <text x="139" y="188" fontFamily="DM Sans, sans-serif" fontSize="11" fill="rgba(255,255,255,0.4)">Applicants</text>
              <text x="139" y="212" fontFamily="DM Sans, sans-serif" fontSize="11" fill="rgba(255,255,255,0.4)">Settings</text>
              <circle cx="134" cy="400" r="12" fill="#1a6b4a" />
              <text x="134" y="404" textAnchor="middle" fontSize="10" fill="white">JD</text>
              <text x="154" y="396" fontFamily="DM Sans, sans-serif" fontSize="10" fill="rgba(255,255,255,0.6)">James D.</text>
              <text x="154" y="408" fontFamily="DM Sans, sans-serif" fontSize="9" fill="rgba(255,255,255,0.3)">Pro plan</text>

              {/* Top bar */}
              <rect x="269" y="34" width="480" height="44" fill="white" fillOpacity="0.8" />
              <text x="285" y="62" fontFamily="DM Serif Display, serif" fontSize="15" fill="#0e0e0f">Overview</text>
              <rect x="620" y="45" width="108" height="22" rx="6" fill="#1a6b4a" />
              <text x="674" y="60" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="10" fill="white" fontWeight="500">+ New Request</text>

              {/* Stat cards */}
              <rect x="285" y="90" width="138" height="72" rx="8" fill="white" stroke="#e0ddd6" strokeWidth="0.5" />
              <text x="300" y="110" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#7a7a7a" letterSpacing="0.5">ACTIVE</text>
              <text x="300" y="136" fontFamily="DM Serif Display, serif" fontSize="22" fill="#0e0e0f">12</text>
              <text x="300" y="152" fontFamily="DM Sans, sans-serif" fontSize="8.5" fill="#7a7a7a">verifications</text>

              <rect x="433" y="90" width="138" height="72" rx="8" fill="white" stroke="#e0ddd6" strokeWidth="0.5" />
              <text x="448" y="110" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#7a7a7a" letterSpacing="0.5">COMPLETED</text>
              <text x="448" y="136" fontFamily="DM Serif Display, serif" fontSize="22" fill="#0e0e0f">47</text>
              <text x="448" y="152" fontFamily="DM Sans, sans-serif" fontSize="8.5" fill="#7a7a7a">this month</text>

              <rect x="581" y="90" width="138" height="72" rx="8" fill="#e8f2ec" stroke="#1a6b4a" strokeWidth="0.5" />
              <text x="596" y="110" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#1a6b4a" letterSpacing="0.5">FRAUD CAUGHT</text>
              <text x="596" y="136" fontFamily="DM Serif Display, serif" fontSize="22" fill="#1a6b4a">6</text>
              <text x="596" y="152" fontFamily="DM Sans, sans-serif" fontSize="8.5" fill="#1a6b4a">flagged this month</text>

              {/* Income trend chart */}
              <rect x="285" y="174" width="280" height="140" rx="8" fill="white" stroke="#e0ddd6" strokeWidth="0.5" />
              <text x="300" y="194" fontFamily="DM Sans, sans-serif" fontSize="9.5" fontWeight="500" fill="#0e0e0f">Income trend</text>
              <text x="300" y="206" fontFamily="DM Sans, sans-serif" fontSize="8" fill="#7a7a7a">Avg verified income / month</text>
              <path d="M300 284 L320 268 L345 272 L368 255 L393 248 L418 242 L443 232 L455 228 L455 290 L300 290 Z" fill="url(#chartFill)" />
              <path d="M300 284 L320 268 L345 272 L368 255 L393 248 L418 242 L443 232 L455 228" stroke="url(#chartLineGrad)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="300" cy="284" r="2.5" fill="#1a6b4a" />
              <circle cx="368" cy="255" r="2.5" fill="#1a6b4a" />
              <circle cx="443" cy="232" r="2.5" fill="#1a6b4a" />
              <circle cx="455" cy="228" r="3.5" fill="#1a6b4a" stroke="white" strokeWidth="1.5" />
              <text x="300" y="302" fontFamily="DM Sans, sans-serif" fontSize="7" fill="#bbb" textAnchor="middle">Aug</text>
              <text x="345" y="302" fontFamily="DM Sans, sans-serif" fontSize="7" fill="#bbb" textAnchor="middle">Sep</text>
              <text x="393" y="302" fontFamily="DM Sans, sans-serif" fontSize="7" fill="#bbb" textAnchor="middle">Oct</text>
              <text x="443" y="302" fontFamily="DM Sans, sans-serif" fontSize="7" fill="#bbb" textAnchor="middle">Nov</text>

              {/* Recent verifications table */}
              <rect x="285" y="326" width="280" height="96" rx="8" fill="white" stroke="#e0ddd6" strokeWidth="0.5" />
              <text x="300" y="344" fontFamily="DM Sans, sans-serif" fontSize="9.5" fontWeight="500" fill="#0e0e0f">Recent verifications</text>
              <line x1="300" y1="352" x2="550" y2="352" stroke="#f0efe9" strokeWidth="0.5" />
              <circle cx="310" cy="364" r="7" fill="#e8f2ec" />
              <text x="310" y="368" textAnchor="middle" fontSize="7" fill="#1a6b4a">AJ</text>
              <text x="324" y="362" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#0e0e0f">Alex Johnson</text>
              <text x="324" y="373" fontFamily="DM Sans, sans-serif" fontSize="8" fill="#7a7a7a">$7,480/mo</text>
              <rect x="488" y="356" width="44" height="14" rx="7" fill="#e8f2ec" />
              <text x="510" y="366" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="7.5" fill="#1a6b4a" fontWeight="500">✓ Verified</text>
              <line x1="300" y1="382" x2="550" y2="382" stroke="#f0efe9" strokeWidth="0.5" />
              <circle cx="310" cy="394" r="7" fill="#f2ede8" />
              <text x="310" y="398" textAnchor="middle" fontSize="7" fill="#9a5c1a">MP</text>
              <text x="324" y="392" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#0e0e0f">Maria Perez</text>
              <text x="324" y="403" fontFamily="DM Sans, sans-serif" fontSize="8" fill="#7a7a7a">$3,200/mo</text>
              <rect x="483" y="386" width="52" height="14" rx="7" fill="#fef3e2" />
              <text x="509" y="396" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="7.5" fill="#b45309" fontWeight="500">⚠ Review</text>
              <circle cx="310" cy="420" r="7" fill="#fde8e8" />
              <text x="310" y="424" textAnchor="middle" fontSize="7" fill="#991b1b">SR</text>
              <text x="324" y="418" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#0e0e0f">Sam R.</text>
              <text x="324" y="429" fontFamily="DM Sans, sans-serif" fontSize="8" fill="#7a7a7a">Pending bank link</text>
              <rect x="484" y="412" width="50" height="14" rx="7" fill="#f5f5f5" />
              <text x="509" y="422" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="7.5" fill="#999" fontWeight="500">○ Pending</text>

              {/* Detail panel */}
              <rect x="575" y="174" width="174" height="248" rx="8" fill="white" stroke="#e0ddd6" strokeWidth="0.5" />
              <rect x="575" y="174" width="174" height="4" rx="2" fill="#1a6b4a" />
              <text x="590" y="198" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#7a7a7a" letterSpacing="0.5">REPORT DETAIL</text>
              <text x="590" y="216" fontFamily="DM Serif Display, serif" fontSize="14" fill="#0e0e0f">Alex Johnson</text>
              <text x="590" y="234" fontFamily="DM Sans, sans-serif" fontSize="8" fill="#7a7a7a">Monthly income breakdown</text>
              <text x="590" y="254" fontFamily="DM Sans, sans-serif" fontSize="8" fill="#0e0e0f">Salary</text>
              <rect x="590" y="258" width="110" height="6" rx="3" fill="#e8f2ec" />
              <rect x="590" y="258" width="88" height="6" rx="3" fill="#1a6b4a" />
              <text x="706" y="264" fontFamily="DM Sans, sans-serif" fontSize="7" fill="#7a7a7a">$5,900</text>
              <text x="590" y="278" fontFamily="DM Sans, sans-serif" fontSize="8" fill="#0e0e0f">Freelance</text>
              <rect x="590" y="282" width="110" height="6" rx="3" fill="#e8f2ec" />
              <rect x="590" y="282" width="48" height="6" rx="3" fill="#4ebe8a" />
              <text x="706" y="288" fontFamily="DM Sans, sans-serif" fontSize="7" fill="#7a7a7a">$1,580</text>
              <line x1="590" y1="304" x2="735" y2="304" stroke="#f0efe9" strokeWidth="1" />
              <text x="590" y="320" fontFamily="DM Sans, sans-serif" fontSize="8" fill="#7a7a7a">3-month average</text>
              <text x="590" y="336" fontFamily="DM Serif Display, serif" fontSize="16" fill="#0e0e0f">$7,480</text>
              <text x="662" y="320" fontFamily="DM Sans, sans-serif" fontSize="8" fill="#7a7a7a">Consistency</text>
              <text x="662" y="336" fontFamily="DM Serif Display, serif" fontSize="16" fill="#0e0e0f">94%</text>
              <line x1="590" y1="344" x2="735" y2="344" stroke="#f0efe9" strokeWidth="1" />
              <rect x="590" y="356" width="130" height="36" rx="8" fill="#e8f2ec" />
              <path d="M602 374l2.5 2.5 5-5" stroke="#1a6b4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <text x="614" y="370" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="500" fill="#1a6b4a">Income Verified</text>
              <text x="614" y="382" fontFamily="DM Sans, sans-serif" fontSize="7.5" fill="#1a6b4a" fontWeight="300">Meets 3× rent requirement</text>
              <rect x="590" y="400" width="130" height="14" rx="4" fill="#0e0e0f" />
              <text x="655" y="411" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8" fill="white">Download PDF Report</text>
            </g>

            {/* Laptop base */}
            <rect x="56" y="446" width="748" height="18" rx="4" fill="url(#laptopBase)" />
            <rect x="88" y="446" width="684" height="3" rx="1.5" fill="#111" />
            <path d="M56 460 Q30 464 10 468 L10 472 Q200 476 430 476 Q660 476 850 472 L850 468 Q830 464 804 460 Z" fill="#1e1e20" />
            <rect x="352" y="454" width="156" height="10" rx="5" fill="#333" />
          </svg>
        </div>
      </div>
    </section>
  )
}

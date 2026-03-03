import Footer from '@/components/landing/Footer'
import Nav from '@/components/landing/Nav'
import ScrollReveal from '@/components/landing/ScrollReveal'
import Waitlist from '@/components/landing/Waitlist'

export const metadata = {
  title: 'How It Works — Veriva',
  description:
    'From sending a request to receiving a tamper-proof report — every step of the Veriva income verification process.',
}

const CheckIcon = () => (
  <svg viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ── PAGE HERO ── */}
        <div className="page-hero">
          <p className="section-label" style={{ opacity: 0, animation: 'fadeUp 0.6s ease forwards 0.05s' }}>
            How it works
          </p>
          <h1>
            A better way to
            <br />
            verify <em>rental income.</em>
          </h1>
          <p className="page-sub">
            From sending a request to receiving a tamper-proof report — here&apos;s every step of
            the Veriva process, and why it&apos;s more reliable than anything you&apos;ve used
            before.
          </p>
        </div>

        <div className="section-divider" />

        {/* ── STEP DEEP DIVES ── */}
        <section id="steps">
          <div className="section">
            <p className="section-label">The process</p>
            <h2>Three steps, zero guesswork.</h2>

            {/* STEP 1 */}
            <div className="step-deep reveal">
              <div className="step-content">
                <div className="step-meta">
                  <span className="step-number">Step 01</span>
                </div>
                <h3>You send a verification request</h3>
                <p>
                  From your Veriva dashboard, enter the applicant&apos;s name and email address.
                  That&apos;s it. Veriva generates a unique, one-time secure link and sends it
                  directly to the applicant on your behalf.
                </p>
                <p>
                  There&apos;s no software for you or the applicant to install, no PDF to fill out,
                  and no back-and-forth required. The entire process happens in a browser.
                </p>
                <ul className="detail-list">
                  <li>
                    <span className="icon-wrap"><CheckIcon /></span>
                    <span>Links expire after 7 days — applicants can&apos;t share or reuse them</span>
                  </li>
                  <li>
                    <span className="icon-wrap"><CheckIcon /></span>
                    <span>Automated reminders sent at 24h and 48h if the applicant hasn&apos;t completed it</span>
                  </li>
                  <li>
                    <span className="icon-wrap"><CheckIcon /></span>
                    <span>You&apos;re notified in real-time the moment verification is complete</span>
                  </li>
                  <li>
                    <span className="icon-wrap"><CheckIcon /></span>
                    <span>Send to multiple applicants simultaneously and track each one independently</span>
                  </li>
                </ul>
              </div>

              <div className="step-visual">
                <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
                  <defs>
                    <linearGradient id="s1bg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f7f6f2" />
                      <stop offset="100%" stopColor="#efefea" />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="300" fill="url(#s1bg)" rx="12" />
                  <rect x="40" y="30" width="320" height="200" rx="12" fill="white" stroke="#e0ddd6" strokeWidth="1" />
                  <text x="60" y="60" fontFamily="DM Sans, sans-serif" fontSize="11" fontWeight="500" fill="#0e0e0f">New Verification Request</text>
                  <line x1="40" y1="72" x2="360" y2="72" stroke="#e0ddd6" strokeWidth="0.75" />
                  <text x="60" y="96" fontFamily="DM Sans, sans-serif" fontSize="9.5" fill="#7a7a7a">Applicant name</text>
                  <rect x="60" y="102" width="260" height="28" rx="6" fill="#f7f6f2" stroke="#e0ddd6" strokeWidth="1" />
                  <text x="74" y="120" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#0e0e0f">Alex Johnson</text>
                  <text x="60" y="144" fontFamily="DM Sans, sans-serif" fontSize="9.5" fill="#7a7a7a">Applicant email</text>
                  <rect x="60" y="150" width="260" height="28" rx="6" fill="#f7f6f2" stroke="#e0ddd6" strokeWidth="1" />
                  <text x="74" y="168" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#0e0e0f">alex@email.com</text>
                  <rect x="60" y="190" width="140" height="30" rx="7" fill="#1a6b4a" />
                  <text x="130" y="209" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="10.5" fontWeight="500" fill="white">Send secure link →</text>
                  <rect x="100" y="248" width="200" height="40" rx="10" fill="#0e0e0f" />
                  <circle cx="120" cy="268" r="8" fill="#1a6b4a" />
                  <path d="M116 268l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <text x="134" y="264" fontFamily="DM Sans, sans-serif" fontSize="9.5" fontWeight="500" fill="white">Link sent to Alex</text>
                  <text x="134" y="276" fontFamily="DM Sans, sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.4)">Expires in 7 days</text>
                </svg>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="step-deep reverse reveal">
              <div className="step-content">
                <div className="step-meta">
                  <span className="step-number">Step 02</span>
                </div>
                <h3>The applicant connects their bank account</h3>
                <p>
                  The applicant opens the secure link and is guided through Plaid&apos;s
                  industry-standard bank connection flow. Plaid is the same technology used by
                  Venmo, Robinhood, and thousands of banks — your applicant may have already used
                  it.
                </p>
                <p>
                  The connection is <strong>read-only</strong>. Veriva — and Plaid — can see
                  transaction history and income deposits. Neither can initiate transfers, view
                  passwords, or store credentials.
                </p>
                <ul className="detail-list">
                  <li>
                    <span className="icon-wrap"><CheckIcon /></span>
                    <span>Supports 12,000+ financial institutions including Chase, BofA, Wells Fargo, and credit unions</span>
                  </li>
                  <li>
                    <span className="icon-wrap"><CheckIcon /></span>
                    <span>Applicant sees exactly what data will be accessed before they confirm</span>
                  </li>
                  <li>
                    <span className="icon-wrap"><CheckIcon /></span>
                    <span>Consent is logged and time-stamped for your audit trail</span>
                  </li>
                  <li>
                    <span className="icon-wrap"><CheckIcon /></span>
                    <span>Process takes under 3 minutes for most applicants</span>
                  </li>
                </ul>
              </div>

              <div className="step-visual">
                <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
                  <rect width="400" height="300" fill="#f7f6f2" rx="12" />
                  <rect x="130" y="16" width="140" height="268" rx="18" fill="#0e0e0f" />
                  <rect x="136" y="24" width="128" height="252" rx="14" fill="white" />
                  <rect x="136" y="24" width="128" height="40" rx="14" fill="#1a6b4a" />
                  <rect x="136" y="44" width="128" height="20" fill="#1a6b4a" />
                  <text x="200" y="50" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="9" fill="white" fontWeight="500">Connect your bank</text>
                  <rect x="148" y="74" width="104" height="22" rx="6" fill="#f7f6f2" />
                  <text x="162" y="88" fontFamily="DM Sans, sans-serif" fontSize="8.5" fill="#bbb">Search bank...</text>
                  <rect x="148" y="104" width="104" height="24" rx="5" fill="#f7f6f2" />
                  <rect x="152" y="108" width="16" height="16" rx="4" fill="#117ACA" />
                  <text x="174" y="120" fontFamily="DM Sans, sans-serif" fontSize="8.5" fill="#0e0e0f">Chase</text>
                  <rect x="148" y="132" width="104" height="24" rx="5" fill="#f7f6f2" />
                  <rect x="152" y="136" width="16" height="16" rx="4" fill="#D71E28" />
                  <text x="174" y="148" fontFamily="DM Sans, sans-serif" fontSize="8.5" fill="#0e0e0f">Bank of America</text>
                  <rect x="148" y="160" width="104" height="24" rx="5" fill="#e8f2ec" stroke="#1a6b4a" strokeWidth="0.75" />
                  <rect x="152" y="164" width="16" height="16" rx="4" fill="#FFCD41" />
                  <text x="174" y="176" fontFamily="DM Sans, sans-serif" fontSize="8.5" fill="#0e0e0f">Wells Fargo</text>
                  <text x="200" y="204" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="7" fill="#7a7a7a">Read-only · No transfers possible</text>
                  <rect x="152" y="210" width="96" height="24" rx="6" fill="#1a6b4a" />
                  <text x="200" y="226" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="500" fill="white">Connect securely</text>
                  <text x="200" y="258" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="7" fill="rgba(0,0,0,0.3)">Powered by Plaid</text>
                  <text x="174" y="258" fontFamily="DM Sans, sans-serif" fontSize="7" fill="rgba(0,0,0,0.3)">🔒</text>
                </svg>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="step-deep reveal">
              <div className="step-content">
                <div className="step-meta">
                  <span className="step-number">Step 03</span>
                </div>
                <h3>You receive a verified, tamper-proof report</h3>
                <p>
                  Within seconds of the applicant connecting their bank, Veriva analyzes 90 days of
                  transaction history and generates a structured income report in your dashboard.
                </p>
                <p>
                  Unlike a bank statement PDF, this report can&apos;t be edited in Photoshop,
                  regenerated from a template, or fabricated in any way — the data flows directly
                  from the bank to you.
                </p>
                <ul className="detail-list">
                  <li>
                    <span className="icon-wrap"><CheckIcon /></span>
                    <span>3-month average income with month-by-month trend breakdown</span>
                  </li>
                  <li>
                    <span className="icon-wrap"><CheckIcon /></span>
                    <span>Income sources identified — salary, freelance, benefits, recurring deposits</span>
                  </li>
                  <li>
                    <span className="icon-wrap"><CheckIcon /></span>
                    <span>Income consistency score — how stable is this income month to month?</span>
                  </li>
                  <li>
                    <span className="icon-wrap"><CheckIcon /></span>
                    <span>Clear pass/fail signal against your rent threshold (configurable)</span>
                  </li>
                  <li>
                    <span className="icon-wrap"><CheckIcon /></span>
                    <span>Downloadable PDF report for your records and compliance documentation</span>
                  </li>
                </ul>
              </div>

              <div className="step-visual">
                <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
                  <defs>
                    <linearGradient id="barG" x1="0" y1="1" x2="0" y2="0">
                      <stop offset="0%" stopColor="#1a6b4a" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#1a6b4a" />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="300" fill="#f7f6f2" rx="12" />
                  <rect x="24" y="20" width="352" height="260" rx="12" fill="white" stroke="#e0ddd6" strokeWidth="1" />
                  <rect x="24" y="20" width="352" height="4" rx="2" fill="#1a6b4a" />
                  <text x="44" y="48" fontFamily="DM Sans, sans-serif" fontSize="9.5" fill="#7a7a7a" letterSpacing="0.5">INCOME VERIFICATION REPORT</text>
                  <rect x="286" y="34" width="72" height="20" rx="10" fill="#e8f2ec" />
                  <text x="322" y="48" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8.5" fontWeight="500" fill="#1a6b4a">✓ Verified</text>
                  <text x="44" y="74" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#7a7a7a">Alex Johnson · Chase Bank</text>
                  <text x="44" y="98" fontFamily="DM Serif Display, serif" fontSize="30" fill="#0e0e0f" letterSpacing="-1">$7,480<tspan fontSize="13" fill="#7a7a7a" fontFamily="DM Sans, sans-serif" letterSpacing="0">/mo avg</tspan></text>
                  <g transform="translate(44, 108)">
                    <rect x="0" y="38" width="28" height="24" rx="3" fill="url(#barG)" opacity="0.5" />
                    <rect x="36" y="22" width="28" height="40" rx="3" fill="url(#barG)" opacity="0.7" />
                    <rect x="72" y="10" width="28" height="52" rx="3" fill="url(#barG)" />
                    <text x="14" y="70" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="7.5" fill="#bbb">Oct</text>
                    <text x="50" y="70" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="7.5" fill="#bbb">Nov</text>
                    <text x="86" y="70" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="7.5" fill="#bbb">Dec</text>
                    <polyline points="14,38 50,22 86,10" stroke="#1a6b4a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    <circle cx="86" cy="10" r="3" fill="#1a6b4a" stroke="white" strokeWidth="1.5" />
                  </g>
                  <line x1="44" y1="196" x2="356" y2="196" stroke="#e0ddd6" strokeWidth="0.75" />
                  <text x="64" y="214" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8.5" fill="#7a7a7a">Sources</text>
                  <text x="64" y="228" textAnchor="middle" fontFamily="DM Serif Display, serif" fontSize="15" fill="#0e0e0f">2</text>
                  <line x1="128" y1="200" x2="128" y2="236" stroke="#e0ddd6" strokeWidth="0.75" />
                  <text x="192" y="214" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8.5" fill="#7a7a7a">Consistency</text>
                  <text x="192" y="228" textAnchor="middle" fontFamily="DM Serif Display, serif" fontSize="15" fill="#0e0e0f">94%</text>
                  <line x1="256" y1="200" x2="256" y2="236" stroke="#e0ddd6" strokeWidth="0.75" />
                  <text x="316" y="214" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8.5" fill="#7a7a7a">Rent ratio</text>
                  <text x="316" y="228" textAnchor="middle" fontFamily="DM Serif Display, serif" fontSize="15" fill="#1a6b4a">3.2×</text>
                  <rect x="44" y="244" width="200" height="24" rx="6" fill="#e8f2ec" />
                  <text x="60" y="260" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="500" fill="#1a6b4a">✓ Meets 3× rent requirement</text>
                  <rect x="284" y="244" width="80" height="24" rx="6" fill="#0e0e0f" />
                  <text x="324" y="260" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8.5" fill="white">↓ Download PDF</text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── REPORT SECTION ── */}
        <section id="report" className="report-section">
          <div className="report-inner">
            <p className="section-label">The report</p>
            <h2>What you actually receive.</h2>
            <p className="report-intro">
              Every Veriva report is structured the same way — so you can make fast, consistent
              decisions across every applicant.
            </p>

            <div className="report-layout">
              {/* Annotated report mockup */}
              <div>
                <svg viewBox="0 0 620 480" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
                  <defs>
                    <linearGradient id="rpbg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#f7f6f2" />
                    </linearGradient>
                    <linearGradient id="rpBar" x1="0" y1="1" x2="0" y2="0">
                      <stop offset="0%" stopColor="#1a6b4a" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#1a6b4a" />
                    </linearGradient>
                  </defs>
                  <rect x="20" y="20" width="420" height="440" rx="16" fill="url(#rpbg)" stroke="#e0ddd6" strokeWidth="1" />
                  <rect x="20" y="20" width="420" height="5" rx="2.5" fill="#1a6b4a" />
                  <text x="44" y="52" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#7a7a7a" letterSpacing="0.8">INCOME VERIFICATION REPORT</text>
                  <rect x="346" y="36" width="72" height="20" rx="10" fill="#e8f2ec" />
                  <text x="382" y="50" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8.5" fontWeight="500" fill="#1a6b4a">✓ Verified</text>
                  <text x="44" y="76" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#7a7a7a">Alex Johnson · alexj@email.com</text>
                  <text x="44" y="90" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#bbb">Chase Bank · Connected Dec 14, 2025</text>
                  <line x1="44" y1="104" x2="420" y2="104" stroke="#e0ddd6" strokeWidth="0.75" />
                  <text x="44" y="126" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#7a7a7a">3-month average income</text>
                  <text x="44" y="156" fontFamily="DM Serif Display, serif" fontSize="38" fill="#0e0e0f" letterSpacing="-1.5">$7,480</text>
                  <text x="44" y="174" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#7a7a7a" fontWeight="300">per month</text>
                  <g transform="translate(44, 190)">
                    <text x="0" y="0" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#7a7a7a">Monthly breakdown</text>
                    <rect x="0" y="52" width="52" height="38" rx="4" fill="url(#rpBar)" opacity="0.55" />
                    <rect x="64" y="28" width="52" height="62" rx="4" fill="url(#rpBar)" opacity="0.75" />
                    <rect x="128" y="12" width="52" height="78" rx="4" fill="url(#rpBar)" />
                    <text x="26" y="48" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8" fill="#7a7a7a">$6,200</text>
                    <text x="90" y="24" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8" fill="#7a7a7a">$7,360</text>
                    <text x="154" y="8" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8" fill="#1a6b4a" fontWeight="500">$8,880</text>
                    <text x="26" y="102" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8" fill="#bbb">Oct</text>
                    <text x="90" y="102" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8" fill="#bbb">Nov</text>
                    <text x="154" y="102" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8" fill="#bbb">Dec</text>
                  </g>
                  <line x1="44" y1="316" x2="420" y2="316" stroke="#e0ddd6" strokeWidth="0.75" />
                  <text x="44" y="336" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#7a7a7a">Income sources</text>
                  <text x="44" y="356" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#0e0e0f">Employer deposit (biweekly)</text>
                  <rect x="44" y="360" width="240" height="7" rx="3.5" fill="#e8f2ec" />
                  <rect x="44" y="360" width="192" height="7" rx="3.5" fill="#1a6b4a" />
                  <text x="292" y="367" fontFamily="DM Sans, sans-serif" fontSize="8.5" fill="#7a7a7a">$5,900</text>
                  <text x="44" y="386" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#0e0e0f">Freelance / irregular deposits</text>
                  <rect x="44" y="390" width="240" height="7" rx="3.5" fill="#e8f2ec" />
                  <rect x="44" y="390" width="76" height="7" rx="3.5" fill="#4ebe8a" />
                  <text x="292" y="397" fontFamily="DM Sans, sans-serif" fontSize="8.5" fill="#7a7a7a">$1,580</text>
                  <line x1="44" y1="412" x2="420" y2="412" stroke="#e0ddd6" strokeWidth="0.75" />
                  <text x="80" y="430" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8.5" fill="#7a7a7a">Consistency</text>
                  <text x="80" y="445" textAnchor="middle" fontFamily="DM Serif Display, serif" fontSize="16" fill="#0e0e0f">94%</text>
                  <text x="200" y="430" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8.5" fill="#7a7a7a">Rent ratio</text>
                  <text x="200" y="445" textAnchor="middle" fontFamily="DM Serif Display, serif" fontSize="16" fill="#1a6b4a">3.2×</text>
                  <text x="330" y="430" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8.5" fill="#7a7a7a">Verdict</text>
                  <rect x="280" y="434" width="100" height="18" rx="9" fill="#e8f2ec" />
                  <text x="330" y="447" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8.5" fill="#1a6b4a" fontWeight="500">✓ Passes</text>
                  {/* Annotation markers */}
                  <circle cx="455" cy="44" r="11" fill="#1a6b4a" />
                  <text x="455" y="48" textAnchor="middle" fontFamily="DM Serif Display, serif" fontSize="12" fill="white">A</text>
                  <line x1="444" y1="44" x2="418" y2="44" stroke="#1a6b4a" strokeWidth="1" strokeDasharray="3,2" />
                  <circle cx="455" cy="140" r="11" fill="#1a6b4a" />
                  <text x="455" y="144" textAnchor="middle" fontFamily="DM Serif Display, serif" fontSize="12" fill="white">B</text>
                  <line x1="444" y1="140" x2="120" y2="140" stroke="#1a6b4a" strokeWidth="1" strokeDasharray="3,2" />
                  <circle cx="455" cy="240" r="11" fill="#1a6b4a" />
                  <text x="455" y="244" textAnchor="middle" fontFamily="DM Serif Display, serif" fontSize="12" fill="white">C</text>
                  <line x1="444" y1="240" x2="180" y2="240" stroke="#1a6b4a" strokeWidth="1" strokeDasharray="3,2" />
                  <circle cx="455" cy="356" r="11" fill="#1a6b4a" />
                  <text x="455" y="360" textAnchor="middle" fontFamily="DM Serif Display, serif" fontSize="12" fill="white">D</text>
                  <line x1="444" y1="356" x2="290" y2="356" stroke="#1a6b4a" strokeWidth="1" strokeDasharray="3,2" />
                  <circle cx="455" cy="437" r="11" fill="#1a6b4a" />
                  <text x="455" y="441" textAnchor="middle" fontFamily="DM Serif Display, serif" fontSize="12" fill="white">E</text>
                  <line x1="444" y1="437" x2="380" y2="437" stroke="#1a6b4a" strokeWidth="1" strokeDasharray="3,2" />
                </svg>
              </div>

              {/* Annotation list */}
              <div className="annotation-list">
                <div className="annotation">
                  <div className="annotation-num">A</div>
                  <div className="annotation-body">
                    <h4>Report header &amp; verification status</h4>
                    <p>Every report shows the applicant&apos;s name, email, connected institution, and the timestamp of when the connection was authorized. The Verified badge confirms data was pulled live from the bank.</p>
                  </div>
                </div>
                <div className="annotation">
                  <div className="annotation-num">B</div>
                  <div className="annotation-body">
                    <h4>3-month average income</h4>
                    <p>The headline number — a rolling 90-day average of all income deposits. More meaningful than a single month&apos;s snapshot, which could be inflated by a one-time payment.</p>
                  </div>
                </div>
                <div className="annotation">
                  <div className="annotation-num">C</div>
                  <div className="annotation-body">
                    <h4>Monthly income trend</h4>
                    <p>A visual breakdown month-by-month so you can spot whether income is growing, stable, or declining — context that a bank statement never gives you at a glance.</p>
                  </div>
                </div>
                <div className="annotation">
                  <div className="annotation-num">D</div>
                  <div className="annotation-body">
                    <h4>Income sources</h4>
                    <p>Salary deposits are separated from freelance, benefits, or other recurring credits. You can see exactly where income is coming from and how reliable each source is.</p>
                  </div>
                </div>
                <div className="annotation">
                  <div className="annotation-num">E</div>
                  <div className="annotation-body">
                    <h4>Consistency score &amp; rent ratio</h4>
                    <p>Consistency measures how stable income is month-to-month (0–100%). Rent ratio compares average income to your asking rent — a 3× ratio means $7,480/mo income for a $2,500/mo unit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── FAQ ── */}
        <section id="faq">
          <div className="section">
            <p className="section-label">Common questions</p>
            <h2>Answers to the objections we hear most.</h2>

            <div className="faq-grid">
              <div className="faq-card reveal">
                <div className="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>Is my renter&apos;s banking data safe?</h3>
                <p>
                  Yes — and crucially, <strong>Veriva never touches your renter&apos;s raw banking
                    credentials.</strong> The bank connection is handled entirely by Plaid, which uses
                  256-bit AES encryption and TLS 1.3. Plaid is used by over 8,000 apps including
                  Venmo, Coinbase, and major mortgage lenders.
                </p>
                <p style={{ marginTop: '12px' }}>
                  Veriva receives a structured data summary — income amounts, deposit patterns,
                  account type — not a full transaction feed or login access. Your applicant can
                  revoke Veriva&apos;s access at any time through their bank&apos;s app.
                </p>
              </div>

              <div className="faq-card reveal">
                <div className="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4M12 16h.01" />
                  </svg>
                </div>
                <h3>What if my renter doesn&apos;t want to connect their bank?</h3>
                <p>
                  That&apos;s their right — and it tells you something. <strong>An applicant who
                    declines is not automatically a bad candidate</strong>, but it does mean you&apos;ll
                  need to fall back to traditional verification methods like paystubs and bank
                  statements, which carry fraud risk.
                </p>
                <p style={{ marginTop: '12px' }}>
                  We recommend making Veriva your preferred verification method while keeping manual
                  review as a fallback. Many landlords frame it simply: &ldquo;We use Veriva to
                  verify income — here&apos;s the link.&rdquo; Most applicants with legitimate
                  income are happy to comply.
                </p>
              </div>

              <div className="faq-card reveal">
                <div className="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3>How is this different from just asking for bank statements?</h3>
                <p>
                  Bank statements are <strong>trivially easy to falsify</strong>. A Google search
                  returns dozens of templates and editing tools. Studies estimate that 15–30% of
                  rental application documents contain some form of manipulation.
                </p>
                <p style={{ marginTop: '12px' }}>
                  With Veriva, data flows directly from the financial institution to your report —
                  there&apos;s no document in between that can be altered. The report is generated
                  by Veriva, not by the applicant. You&apos;re not trusting a PDF; you&apos;re
                  trusting a live bank connection.
                </p>
              </div>

              <div className="faq-card reveal">
                <div className="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 9h6M9 13h4" />
                  </svg>
                </div>
                <h3>Is this legal?</h3>
                <p>
                  Yes. Verifying an applicant&apos;s ability to pay rent is a standard and legally
                  defensible part of the tenant screening process. <strong>Veriva is designed with
                    FCRA-aware principles</strong> — applicants provide explicit consent before any
                  data is accessed, and the consent is logged with a timestamp.
                </p>
                <p style={{ marginTop: '12px' }}>
                  You should not use Veriva data to make decisions based on protected
                  characteristics — income verification is about ability to pay, not about who
                  someone is. As with any screening tool, apply your criteria consistently across
                  all applicants. We recommend consulting a local real estate attorney if you have
                  jurisdiction-specific questions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── CTA ── */}
        <Waitlist />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}

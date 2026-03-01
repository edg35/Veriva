const steps = [
  {
    num: '01',
    title: 'Send a verification request',
    body: "You enter the applicant's name and email. Veriva sends them a secure link to complete in minutes.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="56" height="56" rx="14" fill="#e8f2ec" />
        <rect x="10" y="17" width="30" height="22" rx="3" fill="white" stroke="#1a6b4a" strokeWidth="1.5" />
        <polyline points="10,17 25,28 40,17" stroke="#1a6b4a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="40" cy="38" r="8" fill="#1a6b4a" />
        <path d="M37 38h6M41 36l2 2-2 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Applicant connects their bank',
    body: "Using Plaid's secure connection, the renter links their bank account — no manual uploads, no screenshots.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="56" height="56" rx="14" fill="#e8f2ec" />
        <rect x="13" y="28" width="24" height="14" fill="white" stroke="#1a6b4a" strokeWidth="1.5" />
        <path d="M11 28h28" stroke="#1a6b4a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M25 20l14 8H11l14-8z" fill="#1a6b4a" fillOpacity="0.15" stroke="#1a6b4a" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="21" y="32" width="5" height="10" rx="1" fill="#1a6b4a" fillOpacity="0.3" />
        <rect x="29" y="32" width="5" height="10" rx="1" fill="#1a6b4a" fillOpacity="0.3" />
        <circle cx="40" cy="20" r="8" fill="#0e0e0f" />
        <path d="M37.5 20.5l1.5 1.5 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'You receive a verified report',
    body: 'An official, tamper-proof income report lands in your dashboard — income totals, sources, trends, and a clear pass/fail signal.',
    icon: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="56" height="56" rx="14" fill="#e8f2ec" />
        <rect x="13" y="10" width="24" height="32" rx="3" fill="white" stroke="#1a6b4a" strokeWidth="1.5" />
        <line x1="18" y1="19" x2="32" y2="19" stroke="#e0ddd6" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18" y1="24" x2="32" y2="24" stroke="#e0ddd6" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18" y1="29" x2="26" y2="29" stroke="#e0ddd6" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="40" cy="38" r="9" fill="#1a6b4a" />
        <path d="M36.5 38l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works">
      <div className="section">
        <p className="section-label">How it works</p>
        <h2>Three steps to verified income.</h2>
        <div className="steps">
          {steps.map((step) => (
            <div key={step.num} className="step">
              <div className="step-num">{step.num}</div>
              <div className="step-icon-lg">{step.icon}</div>
              <div className="step-title">{step.title}</div>
              <div className="step-body">{step.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

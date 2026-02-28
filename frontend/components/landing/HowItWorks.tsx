const steps = [
  {
    num: '01',
    title: 'Send a verification request',
    body: "You enter the applicant's name and email. Veriva sends them a secure link to complete in minutes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Applicant connects their bank',
    body: "Using Plaid's secure connection, the renter links their bank account — no manual uploads, no screenshots.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="6" width="18" height="13" rx="2" strokeWidth="2" />
        <path d="M3 10h18" strokeWidth="2" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'You receive a verified report',
    body: 'An official, tamper-proof income report lands in your dashboard — income totals, sources, trends, and a clear pass/fail signal.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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
              <div className="step-icon">{step.icon}</div>
              <div className="step-title">{step.title}</div>
              <div className="step-body">{step.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

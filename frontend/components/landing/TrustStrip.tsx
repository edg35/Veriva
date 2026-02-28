const trustItems = [
  {
    label: 'Bank-grade encryption',
    sub: '256-bit AES · TLS 1.3',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'Read-only Plaid access',
    sub: 'Zero ability to move funds',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Applicant consent required',
    sub: 'FCRA-aware design',
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

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="trust-inner">
        <div className="trust-copy">
          <h2>
            Security you<br />
            <em>can&apos;t compromise on.</em>
          </h2>
          <p>
            Veriva uses Plaid — the same financial infrastructure trusted by
            Venmo, Robinhood, and thousands of financial apps — to access
            applicant data. Read-only. Always.
          </p>
        </div>

        <div className="trust-items">
          {trustItems.map((item) => (
            <div key={item.label} className="trust-item">
              <div className="trust-item-icon">{item.icon}</div>
              <div>
                <div className="trust-item-text">{item.label}</div>
                <div className="trust-item-sub">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

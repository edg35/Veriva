const audiences = [
  {
    tag: 'Independent Landlords',
    heading: "Stop trusting documents you can't verify.",
    body: "Paystubs are easy to fake and bank statements are easy to doctor. Veriva gives you a direct, read-only window into your applicant's real financial picture.",
    features: [
      'One-link verification — no back-and-forth',
      'Instant income summary & 3-month trend',
      'Shareable PDF report for your records',
      'No software to install — works in your browser',
    ],
  },
  {
    tag: 'Property Management Companies',
    heading: 'Standardize verification across your entire portfolio.',
    body: 'Replace inconsistent manual processes with a repeatable, auditable workflow. Your whole team operates from the same source of truth.',
    features: [
      'Team dashboard with all active verifications',
      'Automated request + reminder workflows',
      'Audit trail for compliance documentation',
      'API access for integration with your PMS',
    ],
  },
]

export default function ForWho() {
  return (
    <section id="for-who">
      <div className="section">
        <p className="section-label">Who it&apos;s for</p>
        <h2>Built for landlords and property managers alike.</h2>
        <div className="audience-grid">
          {audiences.map((a) => (
            <div key={a.tag} className="audience-card">
              <span className="audience-tag">{a.tag}</span>
              <h3>{a.heading}</h3>
              <p>{a.body}</p>
              <ul className="feature-list">
                {a.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Hero() {
  return (
    <section>
      <div className="hero">
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
    </section>
  )
}

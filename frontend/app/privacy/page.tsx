import Footer from '@/components/landing/Footer'
import Nav from '@/components/landing/Nav'

export const metadata = {
  title: 'Privacy Policy — Veriva',
  description: 'Learn how Veriva collects, uses, and protects your personal and financial data.',
}

const Section = ({
  num,
  title,
  children,
}: {
  num: string
  title: string
  children: React.ReactNode
}) => (
  <section style={{ marginBottom: '48px' }}>
    <h2
      style={{
        fontFamily: 'var(--font-dm-sans), sans-serif',
        fontSize: '18px',
        fontWeight: 500,
        letterSpacing: '-0.2px',
        color: 'var(--ink)',
        marginBottom: '16px',
        maxWidth: 'none',
        lineHeight: '1.4',
      }}
    >
      {num}. {title}
    </h2>
    <div
      style={{
        fontSize: '15px',
        fontWeight: 300,
        color: 'var(--muted)',
        lineHeight: '1.8',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      {children}
    </div>
  </section>
)

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '68px' }}>
        <article
          style={{
            maxWidth: '740px',
            margin: '0 auto',
            padding: '80px 24px 100px',
          }}
        >
          {/* Header */}
          <header
            style={{
              borderTop: '3px solid var(--accent)',
              paddingTop: '40px',
              marginBottom: '56px',
            }}
          >
            <h1
              style={{
                fontFamily: 'var(--font-dm-serif), serif',
                fontSize: 'clamp(36px, 5vw, 52px)',
                letterSpacing: '-1.5px',
                lineHeight: '1.1',
                color: 'var(--ink)',
                marginBottom: '16px',
                maxWidth: 'none',
                opacity: 1,
                animation: 'none',
              }}
            >
              Privacy Policy
            </h1>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--muted)',
                fontWeight: 300,
              }}
            >
              Last Updated: March 3, 2026
            </p>
          </header>

          {/* 1. Introduction */}
          <Section num="1" title="Introduction">
            <p>
              Veriva (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides automated
              income verification services that connect directly to applicants&apos; bank accounts to
              generate tamper-proof income verification reports. This Privacy Policy explains what
              personal information we collect, how we use it, and the choices you have.
            </p>
            <p>
              By using the Veriva website or submitting your information through any of our forms,
              you agree to the practices described in this policy. This policy is effective as of
              March 3, 2026.
            </p>
          </Section>

          {/* 2. Information We Collect */}
          <Section num="2" title="Information We Collect">
            <p>We collect only the information necessary to provide our services:</p>
            <p>
              <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>
                Email address (waitlist form)
              </strong>
              <br />
              When you join our waitlist, we collect your email address so we can contact you about
              early access, product updates, and service announcements.
            </p>
            <p>
              <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>
                Bank account and financial data (via Plaid)
              </strong>
              <br />
              When you use Veriva&apos;s verification service, we connect to your financial
              institution through Plaid, a licensed financial data aggregator. With your explicit
              consent, we collect account numbers, account balances, and transaction history
              sufficient to generate an income verification report. This data is collected solely to
              produce the report and is never accessed without your authorization.
            </p>
          </Section>

          {/* 3. How We Use Your Data */}
          <Section num="3" title="How We Use Your Data">
            <p>We use the information we collect for the following purposes:</p>
            <ul
              style={{
                paddingLeft: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <li>To generate and deliver income verification reports on your behalf.</li>
              <li>
                To communicate with you about your waitlist status, account, and service updates.
              </li>
              <li>To improve and develop our services and user experience.</li>
              <li>To comply with legal obligations and enforce our terms.</li>
            </ul>
            <p>We do not use your data for advertising or sell it to data brokers.</p>
          </Section>

          {/* 4. Data Retention */}
          <Section num="4" title="Data Retention">
            <p>
              <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Email addresses</strong> are
              retained until you request deletion or unsubscribe from all communications.
            </p>
            <p>
              <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>
                Bank account and transaction data
              </strong>{' '}
              obtained through Plaid is retained for the lifetime of the associated verification
              report and deleted once the report is no longer needed or upon your written request.
            </p>
            <p>
              To request deletion of your data, contact us at the address listed in Section 7.
            </p>
          </Section>

          {/* 5. Third-Party Sharing */}
          <Section num="5" title="Third-Party Sharing">
            <p>
              We do not sell your personal information to third parties. We share data only as
              follows:
            </p>
            <ul
              style={{
                paddingLeft: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <li>
                <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Plaid</strong> — acts as
                our financial data processor to securely retrieve bank data on your behalf, subject
                to{' '}
                <a
                  href="https://plaid.com/legal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent)', textDecoration: 'underline' }}
                >
                  Plaid&apos;s Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Legal disclosure</strong>{' '}
                — we may disclose information if required by law, subpoena, or other legal process.
              </li>
            </ul>
          </Section>

          {/* 6. Your Rights (CCPA) */}
          <Section num="6" title="Your Rights (California Residents — CCPA)">
            <p>
              If you are a California resident, you have the following rights under the California
              Consumer Privacy Act (CCPA):
            </p>
            <ul
              style={{
                paddingLeft: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <li>
                <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Right to Know</strong> —
                you may request information about the categories and specific pieces of personal data
                we have collected about you.
              </li>
              <li>
                <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Right to Delete</strong> —
                you may request that we delete your personal information, subject to certain
                exceptions.
              </li>
              <li>
                <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>
                  Right to Opt-Out of Sale
                </strong>{' '}
                — we do not sell personal information, so this right does not currently apply.
              </li>
              <li>
                <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>
                  Right to Non-Discrimination
                </strong>{' '}
                — we will not discriminate against you for exercising any of your CCPA rights.
              </li>
            </ul>
            <p>To exercise any of these rights, contact us at the address in Section 7.</p>
          </Section>

          {/* 7. Contact Us */}
          <Section num="7" title="Contact Us">
            <p>
              If you have questions about this Privacy Policy or want to exercise your rights,
              please contact us at:
            </p>
            <p>
              <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Email:</strong>{' '}
              <a
                href="mailto:privacy@veriva.com"
                style={{ color: 'var(--accent)', textDecoration: 'underline' }}
              >
                privacy@veriva.com
              </a>
            </p>
          </Section>

          {/* Divider */}
          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', marginTop: '16px' }} />
          <p
            style={{
              marginTop: '24px',
              fontSize: '13px',
              color: 'var(--muted)',
              fontWeight: 300,
            }}
          >
            We may update this Privacy Policy from time to time. Changes will be posted on this page
            with a revised &ldquo;Last Updated&rdquo; date.
          </p>
        </article>
      </main>
      <Footer />
    </>
  )
}

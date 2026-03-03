import Footer from '@/components/landing/Footer'
import Nav from '@/components/landing/Nav'

export const metadata = {
  title: 'Terms of Service — Veriva',
  description: 'Read the Veriva Terms of Service covering acceptable use, disclaimers, and liability.',
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

export default function TermsPage() {
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
              Terms of Service
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

          {/* 1. Agreement */}
          <Section num="1" title="Agreement to Terms">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the
              Veriva website and income verification services (collectively, the
              &ldquo;Service&rdquo;) operated by Veriva (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;).
            </p>
            <p>
              By accessing or using the Service, you agree to be bound by these Terms. If you do not
              agree, do not use the Service.
            </p>
          </Section>

          {/* 2. Acceptable Use */}
          <Section num="2" title="Acceptable Use">
            <p>You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul
              style={{
                paddingLeft: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <li>Use the Service to submit false, misleading, or fraudulent information.</li>
              <li>
                Attempt to gain unauthorized access to any part of the Service, its servers, or any
                connected systems.
              </li>
              <li>
                Reverse engineer, decompile, or otherwise attempt to derive the source code of the
                Service.
              </li>
              <li>
                Use automated tools (scrapers, bots, crawlers) to access or collect data from the
                Service without our prior written consent.
              </li>
              <li>
                Interfere with or disrupt the integrity or performance of the Service or any
                third-party data it relies upon.
              </li>
              <li>
                Use the Service in any way that violates applicable federal, state, or local laws or
                regulations.
              </li>
            </ul>
            <p>
              We reserve the right to suspend or terminate access for any user who violates these
              rules, at our sole discretion and without prior notice.
            </p>
          </Section>

          {/* 3. Intellectual Property */}
          <Section num="3" title="Intellectual Property">
            <p>
              The Service and its original content, features, and functionality are and will remain
              the exclusive property of Veriva. Our name, logo, and all related marks are trademarks
              of Veriva. You may not use them without our prior written permission.
            </p>
            <p>
              Income verification reports generated for you through the Service are provided for
              your personal or business use only and may not be resold, redistributed, or altered.
            </p>
          </Section>

          {/* 4. Third-Party Services */}
          <Section num="4" title="Third-Party Services">
            <p>
              The Service integrates with Plaid to access financial data on your behalf. Your use of
              Plaid&apos;s services is subject to{' '}
              <a
                href="https://plaid.com/legal/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent)', textDecoration: 'underline' }}
              >
                Plaid&apos;s Terms of Service and Privacy Policy
              </a>
              . We are not responsible for the practices, content, or availability of any
              third-party service.
            </p>
          </Section>

          {/* 5. Disclaimer of Warranties */}
          <Section num="5" title="Disclaimer of Warranties">
            <p>
              THE SERVICE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;
              BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            </p>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, VERIVA EXPRESSLY DISCLAIMS ALL WARRANTIES,
              INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              We do not warrant that the Service will be uninterrupted, error-free, or free of
              viruses or other harmful components. We do not warrant the accuracy, completeness, or
              reliability of any income verification report generated through the Service. Reports
              are based on data provided by financial institutions via Plaid and are subject to
              the limitations of that data.
            </p>
          </Section>

          {/* 6. Limitation of Liability */}
          <Section num="6" title="Limitation of Liability">
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL VERIVA, ITS
              OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES — INCLUDING LOSS OF PROFITS, DATA,
              GOODWILL, OR OTHER INTANGIBLE LOSSES — ARISING OUT OF OR RELATED TO YOUR USE OF, OR
              INABILITY TO USE, THE SERVICE.
            </p>
            <p>
              IN NO EVENT WILL VERIVA&apos;S TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF
              OR RELATED TO THESE TERMS OR THE SERVICE EXCEED THE GREATER OF (A) THE AMOUNT YOU
              PAID TO VERIVA IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED
              DOLLARS (USD $100).
            </p>
            <p>
              SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION
              OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, SO THE ABOVE LIMITATIONS MAY NOT
              APPLY TO YOU IN FULL.
            </p>
          </Section>

          {/* 7. Indemnification */}
          <Section num="7" title="Indemnification">
            <p>
              You agree to defend, indemnify, and hold harmless Veriva and its officers, directors,
              employees, and agents from and against any claims, damages, obligations, losses,
              liabilities, costs, or debt arising from: (a) your use of and access to the Service;
              (b) your violation of any of these Terms; or (c) your violation of any third-party
              rights, including intellectual property or privacy rights.
            </p>
          </Section>

          {/* 8. Governing Law */}
          <Section num="8" title="Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the
              State of Delaware, without regard to its conflict of law provisions. Any dispute
              arising under these Terms shall be subject to the exclusive jurisdiction of the courts
              located in Delaware.
            </p>
          </Section>

          {/* 9. Changes to Terms */}
          <Section num="9" title="Changes to Terms">
            <p>
              We reserve the right to modify these Terms at any time. If we make material changes,
              we will update the &ldquo;Last Updated&rdquo; date at the top of this page. Your
              continued use of the Service after changes are posted constitutes your acceptance of
              the revised Terms.
            </p>
          </Section>

          {/* 10. Contact */}
          <Section num="10" title="Contact Us">
            <p>If you have questions about these Terms, please contact us at:</p>
            <p>
              <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Email:</strong>{' '}
              <a
                href="mailto:legal@veriva.com"
                style={{ color: 'var(--accent)', textDecoration: 'underline' }}
              >
                legal@veriva.com
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
            We may update these Terms from time to time. Changes will be posted on this page with a
            revised &ldquo;Last Updated&rdquo; date.
          </p>
        </article>
      </main>
      <Footer />
    </>
  )
}

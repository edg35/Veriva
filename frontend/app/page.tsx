import Footer from '@/components/landing/Footer'
import ForWho from '@/components/landing/ForWho'
import Hero from '@/components/landing/Hero'
import HowItWorks from '@/components/landing/HowItWorks'
import Nav from '@/components/landing/Nav'
import ScrollReveal from '@/components/landing/ScrollReveal'
import TrustStrip from '@/components/landing/TrustStrip'
import Waitlist from '@/components/landing/Waitlist'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="section-divider" />
        <HowItWorks />
        <div className="section-divider" />
        <ForWho />
        <TrustStrip />
        <Waitlist />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}

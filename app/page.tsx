import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import TrustStats from '@/components/trust-stats'
import About from '@/components/about'
import Products from '@/components/products'
import Manufacturing from '@/components/manufacturing'
import IndustryPresence from '@/components/industry-presence'
import DistributorCTA from '@/components/distributor-cta'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustStats />
      <About />
      <Products />
      <Manufacturing />
      <IndustryPresence />
      <DistributorCTA />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

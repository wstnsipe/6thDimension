import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import CredibilityBar from '@/components/CredibilityBar'
import Capabilities from '@/components/Capabilities'
import PastPerformance from '@/components/PastPerformance'
import ProductSpotlight from '@/components/ProductSpotlight'
import Leadership from '@/components/Leadership'
import CareersStrip from '@/components/CareersStrip'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <CredibilityBar />
      <Capabilities />
      <PastPerformance />
      <ProductSpotlight />
      <Leadership />
      <CareersStrip />
      <Contact />
      <Footer />
    </main>
  )
}

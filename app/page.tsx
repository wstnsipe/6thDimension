import Hero from '@/components/Hero'
import CredibilityBar from '@/components/CredibilityBar'
import CapabilitiesPreview from '@/components/CapabilitiesPreview'
import AboutPreview from '@/components/AboutPreview'
import CareersStrip from '@/components/CareersStrip'

export default function Home() {
  return (
    <main>
      <Hero />
      <CredibilityBar />
      <CapabilitiesPreview />
      <AboutPreview />
      <CareersStrip />
    </main>
  )
}

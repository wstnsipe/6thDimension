import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Capabilities from '@/components/Capabilities'
import PastPerformance from '@/components/PastPerformance'

export const metadata: Metadata = {
  title: 'Capabilities | 6th Dimension, Inc.',
  description:
    'Simulation & modeling, software architecture, systems engineering, and aviation mission systems — specialized for defense and DoD programs.',
}

export default function CapabilitiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="What We Do"
        headline="Specialized Capabilities for Critical Programs"
        body="Software and engineering solutions for the programs that cannot afford to get it wrong."
      />
      {/* hideHeader — PageHero above already establishes the section context */}
      <Capabilities hideHeader />
      <PastPerformance />
    </main>
  )
}

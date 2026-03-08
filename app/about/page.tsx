import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Leadership from '@/components/Leadership'

export const metadata: Metadata = {
  title: 'Who We Are | 6th Dimension, Inc.',
  description:
    'Meet the leadership behind 6th Dimension — 25+ years of defense simulation and software engineering experience across Army Aviation, AFRL, and NASA.',
}

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Who We Are"
        headline="Built by People Who've Done the Work"
        body="Our leadership brings decades of hands-on experience from the programs we now support."
      />
      {/* hideEyebrow — PageHero above already sets the section context */}
      <Leadership hideEyebrow />
    </main>
  )
}

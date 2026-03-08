import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact | 6th Dimension, Inc.',
  description:
    "Get in touch with 6th Dimension. Whether you're scoping a new engagement or exploring contracting options, we're ready to talk.",
}

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Get in Touch"
        headline="Let's Talk About Your Program"
        body="Whether you're scoping a new engagement or exploring how 6th Dimension fits your contracting needs, we're ready to have a real conversation."
      />
      {/* hideHeader — PageHero above already establishes the section context */}
      <Contact hideHeader />
    </main>
  )
}

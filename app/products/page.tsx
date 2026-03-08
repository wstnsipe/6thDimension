import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ProductSpotlight from '@/components/ProductSpotlight'

export const metadata: Metadata = {
  title: 'Products | 6th Dimension, Inc.',
  description:
    'Tellus — a simulation and visualization environment built on service-oriented architecture, currently deployed at Air Force Research Labs.',
}

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Products"
        headline="Introducing Tellus"
        body="A simulation and visualization environment built on service-oriented architecture — currently deployed at Air Force Research Labs."
      />
      {/* hideHeader — PageHero above already establishes the product context */}
      <ProductSpotlight hideHeader />
    </main>
  )
}

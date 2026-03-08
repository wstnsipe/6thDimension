import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ProductSpotlight from '@/components/ProductSpotlight'
import UseCases from '@/components/UseCases'

export const metadata: Metadata = {
  title: 'Products | 6th Dimension, Inc.',
  description:
    'Ceres — a configuration-based simulation and visualization platform built on service-oriented architecture for defense and government programs.',
}

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Products"
        headline="Introducing Ceres"
        body="A configuration-based simulation and visualization platform built on service-oriented architecture — supporting multi-domain defense and government programs."
      />
      {/* hideHeader — PageHero above already establishes the product context */}
      <ProductSpotlight hideHeader />
      <UseCases />
    </main>
  )
}

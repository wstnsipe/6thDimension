import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/PageHero'
import { CAREERS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Careers | 6th Dimension, Inc.',
  description:
    'Join 6th Dimension — we\'re looking for engineers and architects who want to work on defense simulation and software engineering programs that matter.',
}

export default function CareersPage() {
  return (
    <main>
      <PageHero
        eyebrow={CAREERS.eyebrow}
        headline={CAREERS.headline}
        body={CAREERS.body}
      />

      {/* Why 6th Dimension */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="eyebrow mb-4">Why Work Here</div>
          <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-slate-900 leading-tight mb-14 max-w-xl">
            Engineering-first. Mission-focused.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CAREERS.values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              >
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-300 tabular-nums mb-5 block">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-slate-800 font-semibold text-[16px] mb-3 leading-snug">
                  {value.title}
                </h3>
                <p className="text-slate-500 text-[13.5px] leading-[1.72]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-navy-900 py-24 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-25 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <div className="eyebrow eyebrow-light mb-4">Open Positions</div>
          <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-white leading-tight mb-8 max-w-xl">
            Current Openings
          </h2>

          <div className="bg-navy-800/60 border border-navy-700 rounded-2xl p-10 max-w-2xl">
            <p className="text-slate-400 text-[15px] leading-[1.8] mb-8">
              {CAREERS.openPositionsNote}
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3.5 rounded-lg transition-all duration-200 hover:shadow-btn-blue text-sm tracking-wide"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { LEADERSHIP } from '@/lib/content'

export default function AboutPreview() {
  return (
    <section className="bg-navy-900 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full hero-glow-tr opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left: Bio snippet + CTA */}
          <div>
            <div className="eyebrow eyebrow-light mb-6">{LEADERSHIP.eyebrow}</div>
            <h2 className="text-3xl md:text-[40px] font-extrabold text-white tracking-tight leading-tight mb-3">
              {LEADERSHIP.headline}
            </h2>
            <p className="text-accent text-[11px] font-bold tracking-[0.22em] uppercase mb-7">
              {LEADERSHIP.title}
            </p>
            <p className="text-slate-400 text-[15px] md:text-base leading-[1.85] mb-10">
              {LEADERSHIP.bio}
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-slate-300 hover:text-white font-semibold text-sm border border-white/[0.12] hover:border-white/25 hover:bg-white/[0.04] px-6 py-3 rounded-lg transition-all duration-200"
            >
              {LEADERSHIP.cta.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
            </Link>
          </div>

          {/* Right: Pull quote */}
          <div className="border-l-2 border-accent pl-8 py-4">
            <p className="text-white/85 text-xl md:text-2xl italic leading-[1.6] font-light mb-6">
              {LEADERSHIP.quote}
            </p>
            <p className="text-slate-600 text-[11px] font-medium tracking-wide not-italic uppercase">
              — {LEADERSHIP.headline}, {LEADERSHIP.title}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CAREERS } from '@/lib/content'

export default function CareersStrip() {
  return (
    <section id="careers" className="bg-accent relative overflow-hidden">

      {/* Subtle texture */}
      <div className="absolute inset-0 hero-grid opacity-[0.12] pointer-events-none" />

      {/* Top + bottom border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-black/10" />

      {/* Soft right-side vignette for depth */}
      <div className="absolute top-0 right-0 h-full w-64 bg-gradient-to-l from-black/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

          {/* Text */}
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="w-5 h-0.5 bg-white/50 rounded" />
              <span className="text-white/60 text-[11px] font-semibold tracking-[0.22em] uppercase">
                {CAREERS.eyebrow}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-[36px] font-extrabold text-white tracking-tight leading-tight mb-4">
              {CAREERS.headline}
            </h2>
            <p className="text-white/65 text-[15px] leading-[1.75]">
              {CAREERS.body}
            </p>
          </div>

          {/* CTA */}
          <div className="flex-shrink-0">
            <Link
              href={CAREERS.cta.href}
              className="group inline-flex items-center gap-2.5 bg-white text-accent hover:bg-slate-50 font-semibold px-7 py-[14px] rounded-lg transition-all duration-200 shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] text-sm tracking-wide active:scale-[0.98]"
            >
              {CAREERS.cta.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

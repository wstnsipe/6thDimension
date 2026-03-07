import { PAST_PERFORMANCE } from '@/lib/content'
import { ShieldCheck } from 'lucide-react'

export default function PastPerformance() {
  return (
    <section className="bg-navy-900 py-24 md:py-32 relative overflow-hidden">

      {/* Background grid texture */}
      <div className="absolute inset-0 hero-grid opacity-35 pointer-events-none" />

      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* Header — split layout */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="eyebrow eyebrow-light">{PAST_PERFORMANCE.eyebrow}</div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-tight max-w-xl">
              {PAST_PERFORMANCE.headline}
            </h2>
          </div>
          <p className="text-slate-500 text-[15px] leading-relaxed max-w-xs lg:text-right lg:pb-1 lg:flex-shrink-0">
            {PAST_PERFORMANCE.subheadline}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {PAST_PERFORMANCE.items.map((item, index) => (
            <div key={item.client} className="perf-card group flex flex-col">

              {/* Card header row */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-navy-500 tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <ShieldCheck className="w-4 h-4 text-navy-600 group-hover:text-navy-500 transition-colors" />
              </div>

              {/* Client */}
              <p className="text-accent-light text-[11px] font-semibold tracking-[0.18em] uppercase mb-2.5">
                {item.client}
              </p>

              {/* Program */}
              <h3 className="text-white font-semibold text-[15px] mb-4 leading-snug">
                {item.program}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-[13.5px] leading-[1.75] mb-6 flex-1">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold tracking-[0.12em] uppercase text-slate-500 bg-navy-900/60 border border-navy-700 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Confidentiality note */}
        <div className="mt-10 flex items-center justify-center gap-2">
          <div className="h-px w-12 bg-navy-700" />
          <p className="text-slate-600 text-[11px] text-center tracking-wide">
            Additional past performance available upon request. Some details are subject to confidentiality restrictions.
          </p>
          <div className="h-px w-12 bg-navy-700" />
        </div>
      </div>
    </section>
  )
}

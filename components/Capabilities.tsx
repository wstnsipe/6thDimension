import Link from 'next/link'
import { ArrowRight, Target, Layers, Cpu, Zap, GitMerge, Plane } from 'lucide-react'
import { CAPABILITIES } from '@/lib/content'

type IconKey = 'radar' | 'layers' | 'cpu' | 'zap' | 'git-merge' | 'plane'

const ICON_MAP: Record<IconKey, React.ReactNode> = {
  radar: <Target className="w-[18px] h-[18px]" />,
  layers: <Layers className="w-[18px] h-[18px]" />,
  cpu: <Cpu className="w-[18px] h-[18px]" />,
  zap: <Zap className="w-[18px] h-[18px]" />,
  'git-merge': <GitMerge className="w-[18px] h-[18px]" />,
  plane: <Plane className="w-[18px] h-[18px]" />,
}

export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-slate-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header — two-column layout at lg */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="eyebrow">{CAPABILITIES.eyebrow}</div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-slate-900 leading-tight mt-0 max-w-xl">
              {CAPABILITIES.headline}
            </h2>
          </div>
          <p className="text-slate-500 text-[15px] leading-relaxed max-w-xs lg:text-right lg:pb-1 lg:flex-shrink-0">
            {CAPABILITIES.subheadline}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CAPABILITIES.items.map((item, index) => (
            <div key={item.title} className="capability-card group">

              {/* Faded background number — premium detail */}
              <span
                aria-hidden="true"
                className="absolute top-5 right-5 text-[68px] font-black text-slate-900/[0.04] leading-none select-none pointer-events-none tabular-nums group-hover:text-slate-900/[0.06] transition-colors duration-300"
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className="relative z-10 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 border border-slate-200/60 text-accent mb-6 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300">
                {ICON_MAP[item.icon as IconKey]}
              </div>

              {/* Text */}
              <h3 className="relative z-10 text-slate-800 font-semibold text-[15px] mb-2.5 leading-snug">
                {item.title}
              </h3>
              <p className="relative z-10 text-slate-500 text-[13.5px] leading-[1.72]">
                {item.description}
              </p>

              {/* Hover CTA */}
              <div className="relative z-10 mt-6 flex items-center gap-1.5 text-accent text-[12px] font-semibold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom rule + CTA */}
        <div className="mt-12 pt-10 border-t border-slate-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            Focused exclusively on the defense and government contracting space.
          </p>
          <Link
            href={CAPABILITIES.cta.href}
            className="group flex-shrink-0 inline-flex items-center gap-2 text-slate-600 hover:text-accent font-semibold text-sm transition-colors duration-200"
          >
            {CAPABILITIES.cta.label}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
          </Link>
        </div>
      </div>
    </section>
  )
}

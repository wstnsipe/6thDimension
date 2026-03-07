import Link from 'next/link'
import { ArrowRight, Check, Layers } from 'lucide-react'
import { PRODUCT } from '@/lib/content'

const statusLines = [
  { label: 'Plugin Runtime', status: 'CONNECTED', dot: 'bg-emerald-400', color: 'text-emerald-400' },
  { label: 'Visualization Engine', status: 'ACTIVE', dot: 'bg-emerald-400', color: 'text-emerald-400' },
  { label: 'SOA Bus', status: 'NOMINAL', dot: 'bg-emerald-400', color: 'text-emerald-400' },
  { label: 'MUM-T Interface', status: 'STANDBY', dot: 'bg-yellow-400', color: 'text-yellow-400' },
]

export default function ProductSpotlight() {
  return (
    <section id="products" className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: Text */}
          <div>
            <div className="eyebrow">{PRODUCT.eyebrow}</div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-slate-900 leading-tight mt-0 mb-4">
              {PRODUCT.headline}
            </h2>
            <p className="text-accent font-medium text-[13.5px] mb-5 leading-relaxed">
              {PRODUCT.subheadline}
            </p>
            <p className="text-slate-500 text-[15px] leading-[1.8] mb-8">
              {PRODUCT.body}
            </p>

            {/* Feature list — 2 columns */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-10">
              {PRODUCT.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <div className="flex-shrink-0 mt-[3px] w-4 h-4 rounded-full bg-accent/[0.1] flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-accent" strokeWidth={2.5} />
                  </div>
                  <span className="text-slate-600 text-[13.5px] leading-snug">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={PRODUCT.cta.href}
              className="group inline-flex items-center gap-2.5 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3.5 rounded-lg transition-all duration-200 hover:shadow-btn-blue text-sm tracking-wide active:scale-[0.98]"
            >
              {PRODUCT.cta.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
            </Link>
          </div>

          {/* Right: Tellus product window */}
          <div className="relative">
            <div className="product-window">

              {/* Window chrome */}
              <div className="flex items-center gap-1.5 mb-5 pb-4 border-b border-navy-700/70">
                <div className="window-dot bg-red-500/70" />
                <div className="window-dot bg-yellow-500/70" />
                <div className="window-dot bg-green-500/70" />
                <div className="flex-1 ml-3 h-5 bg-navy-800 rounded-md flex items-center justify-center border border-navy-700/50">
                  <span className="text-[9px] text-navy-500 font-mono tracking-[0.15em]">
                    tellus.sim.env — runtime active
                  </span>
                </div>
              </div>

              {/* Product header */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center flex-shrink-0">
                  <Layers className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-white font-bold text-base tracking-wider leading-none">TELLUS</p>
                  <p className="text-slate-500 text-[11px] font-mono mt-1">{PRODUCT.version} · {PRODUCT.status}</p>
                </div>
                <div className="ml-auto">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.12em] uppercase text-emerald-400 bg-emerald-400/[0.08] border border-emerald-400/20 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Active
                  </span>
                </div>
              </div>

              {/* Visualization grid — simulated data panels */}
              <div className="grid grid-cols-4 gap-1.5 mb-5">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-lg h-[52px] border transition-all ${
                      i === 2
                        ? 'bg-accent/[0.12] border-accent/30'
                        : i === 6
                        ? 'bg-blue-900/30 border-blue-800/40'
                        : i === 3
                        ? 'bg-navy-800/60 border-navy-700/40'
                        : 'bg-navy-800/40 border-navy-700/30'
                    }`}
                  />
                ))}
              </div>

              {/* Status lines */}
              <div className="divide-y divide-navy-800/80">
                {statusLines.map((line) => (
                  <div key={line.label} className="flex items-center justify-between py-2">
                    <span className="text-slate-500 text-[11px] font-mono">{line.label}</span>
                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${line.dot}`} />
                      <span className={`text-[10px] font-mono font-bold ${line.color} tracking-wider`}>
                        {line.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Deployed-at footer */}
              <div className="mt-5 pt-4 border-t border-navy-700/60 flex items-center gap-2.5">
                <span className="text-navy-600 text-[9px] font-mono uppercase tracking-[0.2em]">
                  Deployed at
                </span>
                <div className="h-px flex-1 bg-navy-800" />
                <span className="text-slate-400 text-[11px] font-mono font-semibold tracking-wider uppercase">
                  {PRODUCT.deployedAt}
                </span>
              </div>
            </div>

            {/* Glow halo */}
            <div
              aria-hidden="true"
              className="absolute -inset-6 bg-accent/[0.04] rounded-[28px] blur-2xl -z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

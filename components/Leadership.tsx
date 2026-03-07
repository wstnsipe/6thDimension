import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { LEADERSHIP } from '@/lib/content'

const credentials = [
  'Army Aviation Programs',
  'Air Force Programs',
  'NASA',
  'Simulation & Modeling',
]

export default function Leadership() {
  return (
    <section id="about" className="bg-navy-900 py-24 md:py-32 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full hero-glow-tr opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        <div className="eyebrow eyebrow-light mb-14">{LEADERSHIP.eyebrow}</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left: Photo column */}
          <div className="relative lg:sticky lg:top-28">
            <div className="relative max-w-[340px]">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-navy-800 border border-navy-700/80 flex items-center justify-center relative">

                {/* REPLACE: Set LEADERSHIP.imageSrc in lib/content.ts to a real headshot path */}
                {LEADERSHIP.imageSrc ? (
                  <Image
                    src={LEADERSHIP.imageSrc}
                    alt={`${LEADERSHIP.headline}, ${LEADERSHIP.title}`}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full w-full gap-4">
                    <div className="w-24 h-24 rounded-full bg-navy-700 border border-navy-600 flex items-center justify-center">
                      <span className="text-3xl font-extrabold text-navy-500 tracking-wider">
                        {LEADERSHIP.initials}
                      </span>
                    </div>
                    <p className="text-navy-600 text-[9px] font-mono tracking-[0.3em] uppercase">
                      Photo Placeholder
                    </p>
                  </div>
                )}

                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-900/60 to-transparent pointer-events-none" />
                {/* Blue accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-accent-light to-accent" />
              </div>

              {/* Floating badge — years experience */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.14)] px-5 py-4 border border-slate-100/80">
                <p className="text-slate-900 font-extrabold text-2xl leading-none tabular-nums">25+</p>
                <p className="text-slate-500 text-[11px] mt-1.5 leading-tight font-medium">
                  Years in<br />Defense Software
                </p>
              </div>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="pt-2">
            <h2 className="text-3xl md:text-[40px] font-extrabold text-white tracking-tight leading-tight">
              {LEADERSHIP.headline}
            </h2>
            <p className="text-accent text-[11px] font-bold tracking-[0.22em] uppercase mt-2 mb-7">
              {LEADERSHIP.title}
            </p>

            <p className="text-slate-400 text-[15px] md:text-base leading-[1.85] mb-10">
              {LEADERSHIP.bio}
            </p>

            {/* Pull quote — left-border style */}
            <div className="border-l-2 border-accent pl-6 mb-10">
              <p className="text-white/85 text-base md:text-lg italic leading-[1.7] font-light">
                {LEADERSHIP.quote}
              </p>
              <p className="text-slate-600 text-[11px] mt-4 font-medium tracking-wide not-italic uppercase">
                — {LEADERSHIP.headline}, {LEADERSHIP.title}
              </p>
            </div>

            {/* Credential tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {credentials.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-[11px] font-medium text-slate-400 bg-navy-800/80 border border-navy-700 px-3.5 py-2 rounded-lg"
                >
                  <span className="w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>

            <Link
              href={LEADERSHIP.cta.href}
              className="group inline-flex items-center gap-2 text-slate-300 hover:text-white font-semibold text-sm border border-white/[0.12] hover:border-white/25 hover:bg-white/[0.04] px-6 py-3 rounded-lg transition-all duration-200"
            >
              {LEADERSHIP.cta.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

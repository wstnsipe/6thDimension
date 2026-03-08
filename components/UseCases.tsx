import { Bot, Globe, Cloud, MapPin, Target, Layout, Compass } from 'lucide-react'
import { USE_CASES } from '@/lib/content'

type IconKey = 'bot' | 'globe' | 'cloud' | 'map-pin' | 'target' | 'layout' | 'compass'

const ICON_MAP: Record<IconKey, React.ReactNode> = {
  bot: <Bot className="w-[18px] h-[18px]" />,
  globe: <Globe className="w-[18px] h-[18px]" />,
  cloud: <Cloud className="w-[18px] h-[18px]" />,
  'map-pin': <MapPin className="w-[18px] h-[18px]" />,
  target: <Target className="w-[18px] h-[18px]" />,
  layout: <Layout className="w-[18px] h-[18px]" />,
  compass: <Compass className="w-[18px] h-[18px]" />,
}

export default function UseCases() {
  return (
    <section className="bg-navy-900 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="eyebrow">{USE_CASES.eyebrow}</div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-tight mt-0 max-w-xl">
              {USE_CASES.headline}
            </h2>
          </div>
          <p className="text-slate-400 text-[15px] leading-relaxed max-w-xs lg:text-right lg:pb-1 lg:flex-shrink-0">
            {USE_CASES.subheadline}
          </p>
        </div>

        {/* Cards Grid — 3 cols with last card spanning on wide screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {USE_CASES.items.map((item, index) => (
            <div
              key={item.title}
              className={`group relative bg-navy-800/50 border border-navy-700/60 rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:border-accent/40 hover:bg-navy-800/80 ${
                index === USE_CASES.items.length - 1 && USE_CASES.items.length % 3 !== 0
                  ? 'sm:col-span-2 lg:col-span-1'
                  : ''
              }`}
            >
              {/* Ghost number */}
              <span
                aria-hidden="true"
                className="absolute top-5 right-5 text-[68px] font-black text-white/[0.03] leading-none select-none pointer-events-none tabular-nums group-hover:text-white/[0.05] transition-colors duration-300"
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Top accent border on hover */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[2px] bg-accent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Icon */}
              <div className="relative z-10 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-navy-700/80 border border-navy-600/60 text-accent mb-6 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300">
                {ICON_MAP[item.icon as IconKey]}
              </div>

              {/* Text */}
              <h3 className="relative z-10 text-white font-semibold text-[15px] mb-2.5 leading-snug">
                {item.title}
              </h3>
              <p className="relative z-10 text-slate-400 text-[13.5px] leading-[1.72]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

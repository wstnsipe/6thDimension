import { CREDIBILITY } from '@/lib/content'

export default function CredibilityBar() {
  return (
    <section className="bg-white border-b border-slate-100/80">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5">
        <div className="flex flex-wrap items-center justify-center">
          {CREDIBILITY.items.map((item, index) => (
            <div key={item.label} className="flex items-center">
              <div className="flex items-center gap-2.5 px-5 md:px-7 py-1.5">
                <span
                  className="w-1 h-1 rounded-full bg-accent/50 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-slate-400 text-[11px] font-semibold tracking-[0.2em] uppercase whitespace-nowrap">
                  {item.label}
                </span>
              </div>
              {index < CREDIBILITY.items.length - 1 && (
                <span
                  className="h-3.5 w-px bg-slate-200 flex-shrink-0"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

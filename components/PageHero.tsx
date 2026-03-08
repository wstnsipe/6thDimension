interface PageHeroProps {
  eyebrow: string
  headline: string
  body?: string
}

export default function PageHero({ eyebrow, headline, body }: PageHeroProps) {
  return (
    <section className="bg-navy-900 pt-36 pb-16 md:pt-44 md:pb-20 relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full hero-glow-tr opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="eyebrow eyebrow-light mb-6">{eyebrow}</div>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.08] max-w-3xl">
          {headline}
        </h1>
        {body && (
          <p className="text-slate-400 text-[15px] md:text-[17px] leading-[1.8] max-w-[560px] mt-6">
            {body}
          </p>
        )}
      </div>
    </section>
  )
}

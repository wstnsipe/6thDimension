'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { HERO } from '@/lib/content'

// ─── Slideshow images ────────────────────────────────────────────────────────
const HERO_IMAGES = [
  {
    src: '/images/hero/hero-1.jpg',
    alt: 'Defense aviation simulation environment',
  },
  {
    src: '/images/hero/hero-2.jpg',
    alt: 'Army aviation mission systems',
  },
  {
    src: '/images/hero/hero-3.jpg',
    alt: 'Software engineering for DoD programs',
  },
]

const INTERVAL_MS = 5000 // time each image is shown
const FADE_MS     = 1000 // crossfade duration

// ─── Stat strip (unchanged from original) ────────────────────────────────────
const stats = [
  { value: '25+', label: 'Years in Defense Software' },
  { value: 'DoD',  label: 'Programs Supported'       },
  { value: 'AFRL', label: 'Platform Deployed'        },
]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Advance to the next image every INTERVAL_MS milliseconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    }, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Background image layers — crossfade via opacity ──────────── */}
      {HERO_IMAGES.map((image, index) => (
        <div
          key={image.src}
          aria-hidden="true"
          className="absolute inset-0 transition-opacity ease-in-out"
          style={{
            opacity: index === activeIndex ? 1 : 0,
            transitionDuration: `${FADE_MS}ms`,
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-center"
            priority={index === 0}
            quality={85}
          />
        </div>
      ))}

      {/* ── Overlay stack — layered so text is always legible ───────── */}

      {/* 1. Base: uniform darkening across the full image */}
      <div aria-hidden="true" className="absolute inset-0 bg-navy-900/60" />

      {/* 2. Left-side gradient: extra contrast behind the text block */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-navy-900/75 via-navy-900/30 to-transparent" />

      {/* 3. Top vignette: keeps nav links readable over any image brightness */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-navy-900/70 via-transparent to-transparent" />

      {/* ── Decorative layers (grid + blue accent glow) ──────────────── */}
      <div aria-hidden="true" className="absolute inset-0 hero-grid opacity-20 pointer-events-none" />
      <div aria-hidden="true" className="absolute top-0 right-0 w-1/2 h-2/3 hero-glow-tr opacity-20 pointer-events-none" />

      {/* Right-edge vertical accent */}
      <div className="absolute right-0 inset-y-0 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      {/* Subtle horizontal texture line */}
      <div className="absolute left-0 right-0 top-[42%] h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />

      {/* ── Slide indicators ─────────────────────────────────────────── */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${
              index === activeIndex
                ? 'w-6 h-1.5 bg-accent'
                : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* ── Content ──────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-36 pb-28 lg:pt-44">
        <div className="max-w-[880px]">

          {/* Eyebrow pill */}
          <div className="animate-fade-in-up mb-10">
            <span className="inline-flex items-center gap-3 bg-accent/[0.07] border border-accent/[0.2] rounded-full pl-3 pr-5 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              <span className="text-accent text-[11px] font-semibold tracking-[0.2em] uppercase">
                {HERO.eyebrow}
              </span>
            </span>
          </div>

          {/* Headline — three lines; last gets gradient treatment */}
          <h1 className="animate-fade-in-up delay-100 space-y-1">
            {HERO.headlineParts.map((part, i) => (
              <span
                key={i}
                className={`block font-extrabold tracking-tighter leading-[1.05] text-[clamp(36px,7vw,82px)] ${
                  i === 2 ? 'gradient-text' : 'text-white'
                }`}
              >
                {part}
              </span>
            ))}
          </h1>

          {/* Body copy */}
          <p className="animate-fade-in-up delay-200 mt-8 text-slate-200 text-base md:text-[17px] leading-[1.8] max-w-[560px] [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
            {HERO.body}
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-300 mt-10 flex flex-col sm:flex-row items-start gap-3">
            <Link
              href={HERO.primaryCta.href}
              className="group inline-flex items-center gap-2.5 bg-accent hover:bg-accent-hover text-white font-semibold px-7 py-[14px] rounded-lg transition-all duration-200 text-sm tracking-wide hover:shadow-btn-blue active:scale-[0.98]"
            >
              {HERO.primaryCta.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
            </Link>
            <Link
              href={HERO.secondaryCta.href}
              className="group inline-flex items-center gap-2 text-slate-300 hover:text-white font-medium px-7 py-[14px] rounded-lg border border-white/[0.12] hover:border-white/25 hover:bg-white/[0.04] transition-all duration-200 text-sm tracking-wide active:scale-[0.98]"
            >
              {HERO.secondaryCta.label}
              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white/60 transition-colors duration-150" />
            </Link>
          </div>

          {/* Stats strip */}
          <div className="animate-fade-in-up delay-400 mt-20 pt-10 border-t border-white/[0.07]">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-0">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`${
                    i < stats.length - 1
                      ? 'sm:pr-12 sm:mr-12 sm:border-r sm:border-white/[0.08]'
                      : ''
                  }`}
                >
                  <p className="text-white text-[34px] font-extrabold tracking-tight tabular-nums leading-none">
                    {stat.value}
                  </p>
                  <p className="text-slate-400 text-[11px] mt-2.5 font-medium tracking-[0.1em] uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade — bridges to white credibility bar */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}

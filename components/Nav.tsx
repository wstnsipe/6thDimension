'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { NAV } from '@/lib/content'

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (!href.startsWith('/')) return false
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-900/96 backdrop-blur-md border-b border-white/8 py-3 shadow-nav'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex items-center gap-1.5">
            <span className="text-white font-bold text-base tracking-[0.12em] group-hover:text-accent transition-colors duration-200">
              {NAV.brand}
            </span>
            <span className="hidden sm:inline-block h-3.5 w-px bg-white/20 mx-0.5" />
            <span className="hidden sm:inline-block text-white/40 text-[10px] font-medium tracking-[0.18em] uppercase">
              {NAV.brandSub}
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {NAV.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                isActive(link.href)
                  ? 'text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-200 ${
                  isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <Link
            href={NAV.cta.href}
            className="bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-all duration-200 hover:shadow-[0_0_20px_rgba(29,111,240,0.35)]"
          >
            {NAV.cta.label}
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white p-1.5 rounded-md hover:bg-white/10 transition-colors"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-navy-900/98 backdrop-blur-md border-t border-white/8">
          <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
            {NAV.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-base font-medium py-3 px-2 border-b border-white/6 rounded transition-colors ${
                  isActive(link.href)
                    ? 'text-white bg-white/5'
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={NAV.cta.href}
              className="mt-4 bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-5 py-3.5 rounded-md text-center transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {NAV.cta.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

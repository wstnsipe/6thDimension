import Link from 'next/link'
import { Linkedin, Phone, Mail, MapPin } from 'lucide-react'
import { FOOTER } from '@/lib/content'

export default function Footer() {
  return (
    <footer className="bg-navy-950">
      {/* Top gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <span className="text-white font-extrabold text-[13px] tracking-[0.18em] uppercase">
                {FOOTER.brand}
              </span>
            </Link>
            <p className="text-slate-500 text-[13px] leading-relaxed mb-7 max-w-[220px]">
              {FOOTER.tagline}
            </p>
            {/* LinkedIn */}
            <a
              href={FOOTER.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-navy-800 border border-navy-700 text-slate-500 hover:text-white hover:bg-navy-700 hover:border-navy-600 transition-all duration-200"
              aria-label="6th Dimension on LinkedIn"
            >
              <Linkedin className="w-[15px] h-[15px]" />
            </a>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-slate-600 mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {FOOTER.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-500 hover:text-slate-200 text-[13px] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-slate-600 mb-5">
              Contact
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${FOOTER.contact.phone.replace(/\D/g, '')}`}
                  className="flex items-center gap-2.5 text-slate-500 hover:text-slate-200 text-[13px] transition-colors duration-150 group"
                >
                  <Phone className="w-3 h-3 text-slate-600 group-hover:text-accent transition-colors flex-shrink-0" />
                  {FOOTER.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${FOOTER.contact.email}`}
                  className="flex items-center gap-2.5 text-slate-500 hover:text-slate-200 text-[13px] transition-colors duration-150 group"
                >
                  <Mail className="w-3 h-3 text-slate-600 group-hover:text-accent transition-colors flex-shrink-0" />
                  {FOOTER.contact.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-slate-500 text-[13px]">
                  <MapPin className="w-3 h-3 text-slate-600 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    {FOOTER.contact.address}<br />
                    {FOOTER.contact.city}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Credentials */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-slate-600 mb-5">
              Credentials
            </p>
            {/* REPLACE: Swap with real badge images once certification marks are available */}
            <div className="flex flex-col gap-2">
              {FOOTER.badges.map((badge) => (
                <div
                  key={badge.label}
                  className="inline-flex items-center gap-2.5 border border-navy-800 bg-navy-900/40 rounded-lg px-3 py-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0" />
                  <span className="text-slate-500 text-[12px] font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-800/80 pt-7">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-[11px] tracking-wide">{FOOTER.legal}</p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-slate-600 hover:text-slate-400 text-[11px] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-slate-600 hover:text-slate-400 text-[11px] transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

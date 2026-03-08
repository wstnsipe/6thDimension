'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react'
import { CONTACT } from '@/lib/content'

const inputClass =
  'w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all duration-200'

const labelClass =
  'block text-[11px] font-semibold text-slate-400 tracking-[0.15em] uppercase mb-2'

interface ContactProps {
  /** Pass true on the /contact page — PageHero already shows the header */
  hideHeader?: boolean
}

export default function Contact({ hideHeader = false }: ContactProps) {
  const [form, setForm] = useState({ name: '', email: '', org: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // REPLACE: Wire to Formspree, Resend, or a Next.js API route at /api/contact
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-slate-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20">

          {/* Left: Contact info */}
          <div>
            {!hideHeader && (
              <>
                <div className="eyebrow">{CONTACT.eyebrow}</div>
                <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-slate-900 leading-tight mt-0 mb-5">
                  {CONTACT.headline}
                </h2>
              </>
            )}
            <p className={`text-slate-500 text-[15px] leading-[1.8] mb-10 max-w-sm ${hideHeader ? '' : ''}`}>
              {CONTACT.body}
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  label: 'Phone',
                  value: CONTACT.details.phone,
                  href: `tel:${CONTACT.details.phone.replace(/\D/g, '')}`,
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: CONTACT.details.email,
                  href: `mailto:${CONTACT.details.email}`,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-accent/[0.08] border border-accent/[0.12] flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-200">
                    <Icon className="w-4 h-4 text-accent group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-slate-400 mb-0.5">
                      {label}
                    </p>
                    <p className="text-slate-700 font-medium text-[14px] group-hover:text-accent transition-colors duration-150">
                      {value}
                    </p>
                  </div>
                </a>
              ))}

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/[0.08] border border-accent/[0.12] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-slate-400 mb-0.5">
                    Office
                  </p>
                  <p className="text-slate-700 font-medium text-[14px] leading-snug">
                    {CONTACT.details.address}
                  </p>
                  <p className="text-slate-500 text-[14px]">{CONTACT.details.city}</p>
                </div>
              </div>
            </div>

            {/* Trust note */}
            <div className="mt-10 pt-8 border-t border-slate-200/80">
              <p className="text-slate-400 text-[12px] leading-relaxed">
                All inquiries are handled by 6th Dimension team members directly.
                We typically respond within one business day.
              </p>
            </div>
          </div>

          {/* Right: Form card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.05)] overflow-hidden">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[480px] py-16 px-8 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5">
                  <CheckCircle className="w-7 h-7 text-emerald-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-slate-900 font-bold text-xl mb-2.5">Message Received</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[240px]">
                  Thank you for reaching out. A member of our team will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>Full Name *</label>
                    <input
                      id="name" name="name" type="text" required
                      value={form.name} onChange={handleChange}
                      placeholder="Jane Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email *</label>
                    <input
                      id="email" name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="jane@agency.mil"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="org" className={labelClass}>Organization</label>
                  <input
                    id="org" name="org" type="text"
                    value={form.org} onChange={handleChange}
                    placeholder="DoD Agency / Company"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>Message *</label>
                  <textarea
                    id="message" name="message" required rows={5}
                    value={form.message} onChange={handleChange}
                    placeholder="Describe your program, scope of work, or inquiry..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold py-[14px] rounded-lg transition-all duration-200 hover:shadow-btn-blue text-sm tracking-wide active:scale-[0.99]"
                >
                  Send Message
                </button>

                <p className="text-slate-400 text-[11px] text-center pt-1">
                  Your information is never shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

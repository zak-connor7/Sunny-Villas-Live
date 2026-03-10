'use client'

import { useState } from 'react'
import { Menu, X, CalendarDays } from 'lucide-react'

const BOOKING_URL = 'https://sunnyvillasresortandspa.reserve-online.net/'

const navLinks = [
  { label: 'Villas', href: '#villas' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Retreats', href: '#retreats' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-cream"
        style={{ borderBottom: '1px solid #dcd5c9' }}
      >
        <div className="relative flex items-center h-[72px] px-6 lg:px-12">
          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="text-navy hover:opacity-60 transition-opacity"
            aria-label="Open menu"
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>

          {/* Centred brand */}
          <a href="#" className="absolute left-1/2 -translate-x-1/2 text-center">
            <span
              className="font-display text-[13px] tracking-[0.28em] text-navy block leading-none"
            >
              SUNNY VILLAS
            </span>
            <span className="text-[9px] tracking-[0.18em] text-muted uppercase block mt-0.5">
              Halkidiki, Greece
            </span>
          </a>

          {/* Right: phone + CTA */}
          <div className="ml-auto flex items-center gap-6">
            <a
              href="tel:+306945796792"
              className="hidden md:block text-[12px] text-muted hover:text-navy transition-colors"
            >
              +30 6945796792
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white text-[10px] tracking-[0.1em] font-semibold px-5 py-3 uppercase"
              style={{ background: '#b8674b' }}
            >
              <CalendarDays size={12} />
              Book Now
            </a>
          </div>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col p-8 md:p-16 bg-navy">
          <button
            onClick={() => setOpen(false)}
            className="self-end text-white mb-12 hover:opacity-60 transition-opacity"
            aria-label="Close menu"
          >
            <X size={22} strokeWidth={1.5} />
          </button>

          <nav className="flex flex-col gap-8">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-[52px] md:text-[72px] text-white leading-none hover:text-rust transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-16 flex flex-col gap-2">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rust text-[12px] tracking-[0.12em] font-semibold uppercase"
            >
              → Book Now
            </a>
            <a href="tel:+306945796792" className="text-white/40 text-sm">
              +30 6945796792
            </a>
          </div>
        </div>
      )}
    </>
  )
}

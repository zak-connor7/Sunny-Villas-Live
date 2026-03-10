'use client'

import Image from 'next/image'

const BOOKING_URL = 'https://sunnyvillasresortandspa.reserve-online.net/'

const footerLinks = [
  { label: 'Villas', href: '#villas' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Retreats', href: '#retreats' },
  { label: 'Contact', href: '#contact' },
]

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80',
    alt: 'Sunny Villas — interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&q=80',
    alt: 'Sunny Villas — villa complex exterior',
  },
  {
    src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=500&q=80',
    alt: 'Sunny Villas — pool with sea view',
  },
]

export default function Footer() {
  return (
    <>
      {/* Pre-footer gallery strip */}
      <div className="grid grid-cols-3 gap-1 bg-white">
        {galleryImages.map((img, i) => (
          <div key={i} className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* Main footer */}
      <footer id="contact" className="bg-navy pt-16 pb-0 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-12">
          <div className="flex flex-col md:flex-row gap-10 md:gap-0">

            {/* Brand column */}
            <div className="md:w-[30%] shrink-0">
              <p className="font-display text-[15px] tracking-[0.3em] text-white mb-1">
                SUNNY VILLAS
              </p>
              <p className="text-[10px] tracking-[0.18em] text-white/40 uppercase mb-6">
                Halkidiki, Greece
              </p>
              <p className="text-[12px] text-white/50 leading-relaxed uppercase tracking-[0.1em] mb-6">
                Hotel Service.<br />Villa Privacy.
              </p>
              <div className="flex flex-col gap-2 text-[12px] text-white/50">
                <a href="tel:+306945796792" className="hover:text-white transition-colors">
                  +30 6945796792
                </a>
                <a href="mailto:info@sunnyvillashalkidiki.com" className="hover:text-white transition-colors">
                  info@sunnyvillashalkidiki.com
                </a>
                <p>Hanioti, Kassandra, 630 85, Greece</p>
              </div>
              <p className="text-[11px] text-white/20 mt-8">
                © 2025 Sunny Villas Resort &amp; Spa. All rights reserved.
              </p>
            </div>

            {/* Divider */}
            <div
              className="hidden md:block shrink-0 mx-10"
              style={{ width: 1, background: 'rgba(255,255,255,0.07)', alignSelf: 'stretch' }}
            />

            {/* Links + social */}
            <div className="flex-1 flex flex-col md:flex-row gap-10 md:gap-16">
              <div>
                <h4 className="text-[11px] font-semibold text-white/60 mb-5 tracking-[0.1em] uppercase">
                  Navigate
                </h4>
                <ul className="space-y-3">
                  {footerLinks.map(link => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[13px] text-white/40 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[11px] font-semibold text-white/60 mb-5 tracking-[0.1em] uppercase">
                  Book
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-white/40 hover:text-white transition-colors"
                    >
                      Check Availability
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@sunnyvillashalkidiki.com"
                      className="text-[13px] text-white/40 hover:text-white transition-colors"
                    >
                      Enquire Directly
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@sunnyvillashalkidiki.com"
                      className="text-[13px] text-white/40 hover:text-white transition-colors"
                    >
                      Retreat Enquiry
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-[11px] font-semibold text-white/60 mb-5 tracking-[0.1em] uppercase">
                  Follow
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://www.instagram.com/sunny_villas_resort_and_spa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-white/40 hover:text-white transition-colors"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/sunnyvillashalkidiki"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-white/40 hover:text-white transition-colors"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Giant brand name at bottom */}
        <div className="overflow-hidden px-2 pb-0 pointer-events-none select-none" aria-hidden>
          <p
            className="font-display leading-none text-center"
            style={{
              fontSize: 'clamp(60px, 12vw, 180px)',
              color: '#b8674b',
              opacity: 0.85,
              letterSpacing: '-0.01em',
            }}
          >
            SUNNY VILLAS
          </p>
        </div>
      </footer>
    </>
  )
}

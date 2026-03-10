'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionDivider } from './About'

const reviews = [
  {
    name: 'M.B.',
    platform: 'G',
    country: 'United Kingdom',
    date: '2024',
    quote:
      'The Spa Villa was perfect for us as a couple. The sauna and whirlpool in the loft were a genuine highlight — not something you\'d expect at this price point. The views from the pool are something else. We\'ll be back.',
  },
  {
    name: 'F.H.',
    platform: 'B',
    country: 'Germany',
    date: '2024',
    quote:
      'We had the Grande Villa with our family of six. Every morning the room service arrived, the pool was cleaned, and we had nothing to worry about. The beach shuttle made getting to Hanioti completely easy. Outstanding.',
  },
  {
    name: 'K.V.',
    platform: 'T',
    country: 'Netherlands',
    date: '2023',
    quote:
      'The complex is beautifully maintained. The villas themselves are spacious and well-equipped, and the location — high up on the hill with the bay in front of you — is genuinely hard to beat. The concierge arranged our yacht day and it was the highlight of the trip.',
  },
  {
    name: 'D.L.',
    platform: 'G',
    country: 'United Kingdom',
    date: '2023',
    quote:
      'Stayed for two weeks in the Two Bedroom Villa. The combination of privacy and service is rare. You feel like you have your own property, but everything is taken care of. Exactly what we were looking for.',
  },
  {
    name: 'R.K.',
    platform: 'B',
    country: 'Netherlands',
    date: '2024',
    quote:
      'Beautiful villas in an excellent location. The team is warm, attentive and genuinely helpful without being intrusive. The pool was always spotless. The best villa experience we\'ve had in Greece.',
  },
  {
    name: 'C.W.',
    platform: 'G',
    country: 'United Kingdom',
    date: '2023',
    quote:
      'Arrived to a beautiful welcome basket in the villa. The views from our terrace were exactly as advertised — if anything, better in person. The diving day arranged by the concierge was a highlight. Cannot recommend enough.',
  },
]

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  const platformLabel: Record<string, string> = {
    G: 'Google',
    B: 'Booking.com',
    T: 'TripAdvisor',
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: (index % 3) * 0.1 }}
      className="bg-white rounded-sm p-6 flex flex-col gap-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[12px] font-semibold tracking-[0.12em] text-navy uppercase">
            {review.name}
          </p>
          <p className="text-[11px] text-muted">{review.country}</p>
        </div>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-navy shrink-0"
          style={{ border: '1.5px solid #dcd5c9' }}
          title={platformLabel[review.platform]}
        >
          {review.platform}
        </div>
      </div>

      <div className="border-b border-dashed border-border" />

      <p className="text-[13px] leading-relaxed text-muted flex-1">
        &ldquo;{review.quote}&rdquo;
      </p>

      <div className="flex items-center justify-between pt-2">
        <span className="text-[11px] font-semibold text-navy/40 tracking-widest">
          ✦ {platformLabel[review.platform]}
        </span>
        <span className="text-[11px] text-muted">{review.date}</span>
      </div>
    </motion.div>
  )
}

export default function Reviews() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="reviews" className="py-20 lg:py-28" style={{ background: '#f5efe6' }} ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex items-start justify-between mb-10">
          <div className="flex-1">
            <SectionDivider label="What Guests Say" />

            <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-10">
              <motion.h2
                className="font-display text-[36px] md:text-[50px] leading-[1.05] text-navy uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                Over 35 Years of Getting It Right.
              </motion.h2>

              <motion.div
                className="flex items-center gap-3 mb-2 shrink-0"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map(i => (
                    <div key={i} className="w-4 h-4 rounded-full bg-rust/80" />
                  ))}
                </div>
                <span className="font-display text-4xl text-navy">4.9</span>
                <span className="text-[12px] font-semibold text-muted">Excellent</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((review, i) => (
            <ReviewCard key={review.name + i} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

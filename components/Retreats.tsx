'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionDivider } from './About'

const retreatTypes = [
  {
    step: '01',
    heading: 'Corporate Retreats',
    body: 'Offsites, strategy sessions, and leadership retreats. Space to think away from the office, with a team that handles all the logistics — rooms, meals, transfers, and activities — so you can focus on the people and the work.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=540&q=80',
        alt: 'Corporate retreat workshop',
      },
      {
        src: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=540&q=80',
        alt: 'Outdoor meeting on terrace',
      },
    ],
  },
  {
    step: '02',
    heading: 'Wellness Retreats',
    body: 'Yoga, meditation, spa treatments, and sea air. The complex has the space, the on-site spa, and the quiet to support a proper wellness programme. We can arrange instructors, therapists, and tailored meal options.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=540&q=80',
        alt: 'Yoga session on terrace overlooking the sea',
      },
      {
        src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=540&q=80',
        alt: 'Spa and wellness treatment',
      },
    ],
  },
  {
    step: '03',
    heading: 'Group Celebrations',
    body: 'Milestone birthdays, anniversaries, hen parties, and multi-family getaways. The full complex — the pools, the grounds, the terrace, the spa — is yours exclusively. We handle the catering, transfers, and any excursions you want to arrange.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=540&q=80',
        alt: 'Celebration group dining',
      },
      {
        src: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=540&q=80',
        alt: 'Evening pool scene for group celebrations',
      },
    ],
  },
]

function RetreatStep({ retreat, index }: { retreat: typeof retreatTypes[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div
      ref={ref}
      className="relative grid md:grid-cols-2 gap-10 lg:gap-20 items-start py-16 border-b border-border last:border-0"
    >
      {/* Watermark step number */}
      <div
        className="absolute inset-0 flex items-center justify-end pr-4 pointer-events-none select-none"
        aria-hidden
      >
        <span
          className="font-display text-[180px] leading-none text-navy"
          style={{ opacity: 0.04 }}
        >
          {retreat.step}
        </span>
      </div>

      {/* Images */}
      <motion.div
        className="flex flex-col gap-4 relative z-10"
        initial={{ opacity: 0, x: -24 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.85 }}
      >
        {retreat.images.map((img, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded"
            style={{ aspectRatio: '4/3' }}
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </div>
        ))}
      </motion.div>

      {/* Text */}
      <motion.div
        className="relative z-10 md:pt-12"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, delay: 0.15 }}
      >
        <span className="text-[11px] tracking-[0.2em] text-muted font-medium uppercase block mb-4">
          {retreat.step}
        </span>
        <h3 className="font-display text-[32px] md:text-[40px] text-navy leading-tight uppercase mb-6">
          {retreat.heading}
        </h3>
        <p className="text-[14px] leading-relaxed text-muted max-w-md mb-8">
          {retreat.body}
        </p>
        <a
          href="mailto:info@sunnyvillashalkidiki.com"
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] font-semibold text-white uppercase px-7 py-3.5 bg-rust hover:bg-rust/90 transition-colors"
        >
          → Enquire About a Retreat
        </a>
      </motion.div>
    </div>
  )
}

export default function Retreats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="retreats" className="bg-white py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12" ref={ref}>
        <SectionDivider label="Private Events &amp; Retreats" />

        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-[36px] md:text-[50px] leading-[1.05] text-navy uppercase mb-3">
            The Whole Complex Is Yours.
          </h2>
          <p className="text-[14px] text-rust italic mb-6">
            Eleven villas on the same hillside — bookable as one.
          </p>
          <p className="text-[14px] leading-relaxed text-muted max-w-2xl">
            All eleven villas sit on the same land. Book them together and the entire hillside is yours: multiple heated pools, the spa, the gym, and the bay views — for your group alone.
          </p>
        </motion.div>

        <div className="mt-12">
          {retreatTypes.map((retreat, i) => (
            <RetreatStep key={retreat.step} retreat={retreat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

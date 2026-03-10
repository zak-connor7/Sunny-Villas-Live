'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Waves, Bell, Sparkles, Compass, Dumbbell,
  Wifi, Car, Gift, Shield, Tv,
} from 'lucide-react'
import { SectionDivider } from './About'

const amenities = [
  { icon: Waves,    label: 'Heated Private Pool' },
  { icon: Bell,     label: 'Daily Room Service' },
  { icon: Sparkles, label: 'On-Site Spa' },
  { icon: Compass,  label: 'Activity Concierge' },
  { icon: Dumbbell, label: 'Free Gym' },
  { icon: Wifi,     label: 'Free Wi-Fi' },
  { icon: Car,      label: 'Free Parking' },
  { icon: Gift,     label: 'Welcome Basket' },
  { icon: Shield,   label: 'Digital Safe' },
  { icon: Tv,       label: 'Satellite TV' },
]

export default function Amenities() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="amenities" className="bg-cream py-20 lg:py-24" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionDivider label="What&apos;s Included" />

        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-[36px] md:text-[50px] leading-[1.05] text-navy uppercase mb-2">
            Everything You Need. Nothing You Don&apos;t.
          </h2>
          <p className="text-[14px] text-rust italic">Every villa. Every stay.</p>
        </motion.div>

        {/* Two wide images */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 mb-14">
          <motion.div
            className="relative overflow-hidden"
            style={{ borderRadius: 6, aspectRatio: '4/3' }}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80"
              alt="Private pool with afternoon light and sea view"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="relative overflow-hidden"
            style={{ borderRadius: 6, aspectRatio: '4/3' }}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&q=80"
              alt="On-site spa and wellness facilities"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Icon grid — 5 columns × 2 rows */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-4">
          {amenities.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              className="flex flex-col items-center gap-3 text-center"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ border: '1.5px solid #dcd5c9' }}
              >
                <Icon size={20} strokeWidth={1.25} color="#b8674b" />
              </div>
              <span className="text-[11px] text-muted leading-tight max-w-[90px]">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

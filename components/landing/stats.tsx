'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 1.2, suffix: 'M+', label: 'ECGs analyzed' },
  { value: 99.2, suffix: '%', label: 'Signal reconstruction fidelity' },
  { value: 14, suffix: '+', label: 'Cardiac conditions detected' },
  { value: 8, suffix: 's', label: 'Average analysis time' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(value * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  const formatted = Number.isInteger(value)
    ? Math.round(display).toString()
    : display.toFixed(1)

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="border-y border-border/60 bg-sidebar/50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-6 py-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="px-4 py-8 text-center"
          >
            <div className="text-4xl font-semibold tracking-tight text-foreground">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-1.5 text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

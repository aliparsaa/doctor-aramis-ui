'use client'

import { motion } from 'framer-motion'
import { Upload, Cpu, FileHeart } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    step: '01',
    title: 'Upload your ECG',
    desc: 'Drop a photo, scan, or PDF of any 12-lead or single-lead ECG. Our vision model auto-detects leads, grid scale, and calibration.',
  },
  {
    icon: Cpu,
    step: '02',
    title: 'AI reconstructs & analyzes',
    desc: 'We digitize the trace into a clean time-series signal, then a cardiology-trained model screens for arrhythmias and structural disease.',
  },
  {
    icon: FileHeart,
    step: '03',
    title: 'Get a clinical report',
    desc: 'Receive diagnosis, confidence scores, heart rate, and a color-coded risk level — ready to share with your care team.',
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          From image to insight in three steps
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          No special hardware. No manual annotation. Just a clear, fast path
          from an ECG photo to an actionable cardiac assessment.
        </p>
      </div>

      <div className="relative mt-16 grid gap-6 md:grid-cols-3">
        <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative rounded-2xl glass p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
              <s.icon className="h-5 w-5 text-primary" />
            </div>
            <div className="mt-5 text-sm font-mono text-primary">{s.step}</div>
            <h3 className="mt-1 text-lg font-semibold text-foreground">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

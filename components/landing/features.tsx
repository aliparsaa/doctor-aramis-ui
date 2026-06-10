'use client'

import { motion } from 'framer-motion'
import {
  Activity,
  Brain,
  LineChart,
  Lock,
  Stethoscope,
  Zap,
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Deep cardiac models',
    desc: 'Ensemble networks trained on millions of annotated ECGs detect AFib, STEMI, bundle branch blocks, and more.',
  },
  {
    icon: Activity,
    title: 'Image-to-signal engine',
    desc: 'Reconstruct a faithful digital waveform from any ECG photo, even with glare, skew, or paper grid noise.',
  },
  {
    icon: LineChart,
    title: 'Risk stratification',
    desc: 'Every result includes a calibrated risk score so clinicians can triage and prioritize confidently.',
  },
  {
    icon: Stethoscope,
    title: 'Clinician copilot',
    desc: 'An AI assistant that explains findings, suggests next steps, and answers cardiology questions in plain language.',
  },
  {
    icon: Lock,
    title: 'Private by design',
    desc: 'PHI is encrypted in transit and at rest. HIPAA compliant with full audit logging and access controls.',
  },
  {
    icon: Zap,
    title: 'Built for speed',
    desc: 'Results in seconds via a horizontally scaled inference pipeline — fast enough for the point of care.',
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          A complete cardiac AI platform
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Everything you need to turn raw ECGs into trustworthy clinical
          decisions — engineered to medical-grade standards.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.1 }}
            className="group rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/40"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 transition-colors group-hover:bg-primary/20">
              <f.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-5 text-base font-semibold text-foreground">
              {f.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

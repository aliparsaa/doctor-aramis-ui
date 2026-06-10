'use client'

import { motion } from 'framer-motion'
import { Activity, MessageSquareHeart, ShieldCheck, Sparkles } from 'lucide-react'
import { ButtonLink } from '@/components/button-link'
import { EcgWave } from '@/components/ecg-wave'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute inset-x-0 top-1/2 h-64 opacity-50">
          <EcgWave height={220} beats={8} durationSec={4} />
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          FDA-aligned cardiac AI • 99.2% signal fidelity
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-7xl"
        >
          AI-Powered{' '}
          <span className="text-primary text-glow">Heart Intelligence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          Upload an ECG image and Doctor Aramis reconstructs the underlying
          signal, detects arrhythmias and structural heart disease, and returns
          a clinician-ready risk assessment in seconds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <ButtonLink href="/upload" size="lg" className="teal-glow">
            <Activity className="h-4 w-4" />
            Upload ECG
          </ButtonLink>
          <ButtonLink href="/chat" size="lg" variant="outline">
            <MessageSquareHeart className="h-4 w-4" />
            Try AI Chat
          </ButtonLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground"
        >
          <ShieldCheck className="h-3.5 w-3.5 text-primary" />
          HIPAA compliant • SOC 2 Type II • End-to-end encrypted
        </motion.div>
      </div>
    </section>
  )
}

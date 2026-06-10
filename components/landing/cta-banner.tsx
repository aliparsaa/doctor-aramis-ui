'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button";
import { EcgWave } from '@/components/ecg-wave'
import Link from 'next/link'

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-10 text-center teal-glow sm:p-16"
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 opacity-30">
          <EcgWave height={160} beats={10} durationSec={5} />
        </div>
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-primary/15 blur-[100px]" />

        <h2 className="relative text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Bring cardiac AI to your practice today
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
          Start analyzing ECGs in minutes. No installation, no special hardware —
          just upload and get clinical-grade insight.
        </p>
        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="teal-glow">
            <Link href="/register">Create free account</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/upload">Analyze an ECG</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

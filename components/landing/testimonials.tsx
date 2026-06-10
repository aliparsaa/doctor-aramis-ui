'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const testimonials = [
  {
    quote:
      'Doctor Aramis flagged a subtle anterior STEMI from a phone photo of an ECG faster than I could pull up the prior study. It has become part of our ED triage.',
    name: 'Dr. Elena Rossi',
    role: 'Emergency Physician, Mercy General',
    initials: 'ER',
  },
  {
    quote:
      'The image-to-signal reconstruction is remarkable. We feed it scanned paper ECGs from rural clinics and get clean, analyzable waveforms every time.',
    name: 'Dr. Marcus Bauer',
    role: 'Cardiologist, Heartland Cardiac Institute',
    initials: 'MB',
  },
  {
    quote:
      'Risk scores are well calibrated and the assistant explains its reasoning. It saves our fellows hours and improves how we prioritize patients.',
    name: 'Dr. Priya Nair',
    role: 'Director of Cardiology, Coastal Medical',
    initials: 'PN',
  },
]

export function Testimonials() {
  return (
    <section className="border-y border-border/60 bg-sidebar/50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Trusted by clinicians at the point of care
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Cardiologists and emergency physicians rely on Doctor Aramis to read
            ECGs and stratify cardiac risk.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className="flex flex-col rounded-2xl glass p-6"
            >
              <Quote className="h-6 w-6 text-primary/60" />
              <blockquote className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-foreground/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary/15 text-primary">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-medium text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

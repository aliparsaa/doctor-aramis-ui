import Link from 'next/link'
import { Logo } from '@/components/logo'

const columns = [
  {
    title: 'Platform',
    links: [
      { label: 'ECG Analysis', href: '/upload' },
      { label: 'AI Assistant', href: '/chat' },
      { label: 'Patient Dashboard', href: '/dashboard' },
      { label: 'Doctor Panel', href: '/doctor' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/#features' },
      { label: 'How it works', href: '/#how' },
      { label: 'Security', href: '/#features' },
      { label: 'Careers', href: '/#features' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Clinical Validation', href: '/#features' },
      { label: 'Documentation', href: '/#features' },
      { label: 'API Reference', href: '/#features' },
      { label: 'Admin Console', href: '/admin' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-sidebar">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
            Medical-grade AI that reads ECGs, detects cardiac disease, and helps
            clinicians act faster.
          </p>
          <p className="text-xs text-muted-foreground/70">
            For clinical decision support. Not a substitute for professional
            medical judgment.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title} className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">
              {col.title}
            </h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Doctor Aramis, Inc. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/#" className="hover:text-foreground">Privacy</Link>
            <Link href="/#" className="hover:text-foreground">Terms</Link>
            <Link href="/#" className="hover:text-foreground">HIPAA</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

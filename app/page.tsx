import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/landing/hero'
import { Stats } from '@/components/landing/stats'
import { HowItWorks } from '@/components/landing/how-it-works'
import { Features } from '@/components/landing/features'
import { Testimonials } from '@/components/landing/testimonials'
import { CtaBanner } from '@/components/landing/cta-banner'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Features />
        <Testimonials />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  )
}

import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Doctor Aramis — AI-Powered Heart Intelligence',
  description:
    'Doctor Aramis converts ECG images into signals and uses medical-grade AI to detect heart disease, assess risk, and triage patients in seconds.',
  generator: 'v0.app',
  keywords: [
    'ECG analysis',
    'AI cardiology',
    'heart disease detection',
    'medical AI',
    'arrhythmia detection',
  ],
}

export const viewport = {
  themeColor: '#0B1C2D',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

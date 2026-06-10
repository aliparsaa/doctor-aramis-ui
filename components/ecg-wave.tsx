'use client'

import { motion } from 'framer-motion'
import { useId } from 'react'
import { cn } from '@/lib/utils'

/**
 * Generates a repeating ECG (PQRST) waveform path across a given width.
 */
function buildEcgPath(width: number, height: number, beats: number) {
  const mid = height / 2
  const beatWidth = width / beats
  let d = `M 0 ${mid}`
  for (let i = 0; i < beats; i++) {
    const x = i * beatWidth
    // baseline -> P wave -> baseline -> Q,R,S spike -> T wave -> baseline
    d += ` L ${x + beatWidth * 0.1} ${mid}`
    d += ` Q ${x + beatWidth * 0.16} ${mid - height * 0.12} ${x + beatWidth * 0.22} ${mid}` // P
    d += ` L ${x + beatWidth * 0.34} ${mid}`
    d += ` L ${x + beatWidth * 0.38} ${mid + height * 0.18}` // Q
    d += ` L ${x + beatWidth * 0.44} ${mid - height * 0.46}` // R peak
    d += ` L ${x + beatWidth * 0.5} ${mid + height * 0.26}` // S
    d += ` L ${x + beatWidth * 0.56} ${mid}`
    d += ` Q ${x + beatWidth * 0.68} ${mid - height * 0.2} ${x + beatWidth * 0.8} ${mid}` // T
    d += ` L ${x + beatWidth} ${mid}`
  }
  return d
}

export function EcgWave({
  className,
  height = 160,
  width = 1200,
  beats = 6,
  color = 'var(--teal)',
  strokeWidth = 2.5,
  loop = true,
  durationSec = 3,
}: {
  className?: string
  height?: number
  width?: number
  beats?: number
  color?: string
  strokeWidth?: number
  loop?: boolean
  durationSec?: number
}) {
  const id = useId().replace(/:/g, '')
  const path = buildEcgPath(width, height, beats)

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={cn('h-full w-full', className)}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`grad-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={color} stopOpacity="0" />
          <stop offset="15%" stopColor={color} stopOpacity="1" />
          <stop offset="85%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* faint full path */}
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeOpacity={0.12}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* animated draw */}
      <motion.path
        d={path}
        fill="none"
        stroke={`url(#grad-${id})`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0.6 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: durationSec,
          repeat: loop ? Infinity : 0,
          ease: 'linear',
        }}
        style={{ filter: `drop-shadow(0 0 6px ${color})` }}
      />
    </svg>
  )
}

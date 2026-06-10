import { cn } from '@/lib/utils'

type Risk = 'low' | 'moderate' | 'high'

const styles: Record<Risk, string> = {
  low: 'bg-primary/15 text-primary ring-1 ring-primary/30',
  moderate:
    'bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/30',
  high: 'bg-destructive/15 text-destructive ring-1 ring-destructive/30',
}

const labels: Record<Risk, string> = {
  low: 'Low Risk',
  moderate: 'Moderate Risk',
  high: 'High Risk',
}

export function RiskBadge({
  level,
  className,
}: {
  level: Risk
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium',
        styles[level],
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {labels[level]}
    </span>
  )
}

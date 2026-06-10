import { cn } from '@/lib/utils'

export function Logo({
  className,
  showText = true,
}: {
  className?: string
  showText?: boolean
}) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5 text-primary"
          aria-hidden="true"
        >
          <path
            d="M3 12h3l1.5-5 3 11 2.5-8 1.5 4H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {showText && (
        <span className="text-balance text-base font-semibold tracking-tight text-foreground">
          Doctor Aramis
        </span>
      )}
    </div>
  )
}

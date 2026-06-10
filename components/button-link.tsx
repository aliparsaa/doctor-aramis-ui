import Link from 'next/link'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import type { VariantProps } from 'class-variance-authority'

type ButtonLinkProps = ComponentProps<typeof Link> &
  VariantProps<typeof buttonVariants>

/**
 * A Next.js Link styled as a button. Use instead of `<Button asChild>` since
 * this project's Button is built on base-ui (no `asChild` prop).
 */
export function ButtonLink({
  className,
  variant,
  size,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

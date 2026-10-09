import type { ReactNode } from 'react'

export type BadgeTone = 'orange' | 'green' | 'gray' | 'red'

const tones: Record<BadgeTone, string> = {
  orange: 'bg-orange-soft text-orange',
  green: 'bg-success-soft text-success',
  gray: 'bg-gray-200 text-gray-600',
  red: 'bg-danger-soft text-danger',
}

type BadgeProps = {
  tone?: BadgeTone
  shape?: 'pill' | 'tag'
  children: ReactNode
}

function Badge({ tone = 'gray', shape = 'pill', children }: BadgeProps) {
  const radius = shape === 'pill' ? 'rounded-full' : 'rounded-md'
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-xs font-medium whitespace-nowrap ${radius} ${tones[tone]}`}
    >
      {children}
    </span>
  )
}

export default Badge

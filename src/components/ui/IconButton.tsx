import type { ButtonHTMLAttributes, ReactNode } from 'react'

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  variant?: 'soft' | 'ghost'
  children: ReactNode
}

function IconButton({
  label,
  variant = 'ghost',
  className = '',
  children,
  ...rest
}: IconButtonProps) {
  const style =
    variant === 'soft'
      ? 'h-10 w-10 bg-page text-ink hover:bg-gray-200'
      : 'h-7 w-7 text-muted hover:bg-page'
  return (
    <button
      type="button"
      aria-label={label}
      className={`inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors ${style} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default IconButton

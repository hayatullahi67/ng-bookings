import type { ReactNode } from 'react'

type CardProps = {
  title?: string
  titleExtra?: ReactNode
  action?: ReactNode
  className?: string
  children: ReactNode
}

function Card({ title, titleExtra, action, className = '', children }: CardProps) {
  return (
    <section className={`min-w-0 rounded-2xl bg-white p-4 sm:p-5 ${className}`}>
      {(title || action) && (
        <header className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {title && (
              <h2 className="text-[13px] font-medium tracking-wide text-ink uppercase">
                {title}
              </h2>
            )}
            {titleExtra}
          </div>
          {action}
        </header>
      )}
      {children}
    </section>
  )
}

export default Card

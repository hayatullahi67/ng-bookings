import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

type PaginationProps = {
  page: number
  pageCount: number
  onChange: (page: number) => void
}

const edge =
  'inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:bg-page disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:bg-white'

function Pagination({ page, pageCount, onChange }: PaginationProps) {
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1)

  return (
    <nav aria-label="Pagination" className="flex items-center gap-2">
      <button
        type="button"
        className={edge}
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        <FiArrowLeft aria-hidden="true" />
        Prev
      </button>
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          aria-current={p === page ? 'page' : undefined}
          onClick={() => onChange(p)}
          className={`h-8 w-8 cursor-pointer rounded-full border border-line text-sm font-medium text-ink transition-colors ${
            p === page ? 'bg-gray-200' : 'bg-white hover:bg-page'
          }`}
        >
          {p}
        </button>
      ))}
      <button
        type="button"
        className={edge}
        disabled={page === pageCount}
        onClick={() => onChange(page + 1)}
      >
        Next
        <FiArrowRight aria-hidden="true" />
      </button>
    </nav>
  )
}

export default Pagination

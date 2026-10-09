import type { ReactNode } from 'react'

export type Column<T> = {
  key: string
  header: string
  align?: 'left' | 'right'
  className?: string
  render: (row: T) => ReactNode
}

type DataTableProps<T> = {
  columns: Column<T>[]
  rows: T[]
  rowKey: (row: T) => string | number
  size?: 'sm' | 'md'
  /** Tailwind min-width class; below it the table scrolls sideways. */
  minWidth?: string
}

function DataTable<T>({
  columns,
  rows,
  rowKey,
  size = 'md',
  minWidth = '',
}: DataTableProps<T>) {
  const cell = size === 'md' ? 'px-5 py-4 text-sm' : 'px-3 py-3 text-[13px]'
  const head = size === 'md' ? 'px-5 py-4' : 'px-3 py-3'

  return (
    <div className="overflow-x-auto rounded-xl border border-line">
      <table className={`w-full border-collapse text-left ${minWidth}`}>
        <thead className="bg-page">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={`text-[13px] font-medium text-muted ${head} ${
                  col.align === 'right' ? 'text-right' : ''
                }`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={rowKey(row)} className="border-t border-line">
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`text-ink ${cell} ${
                    col.align === 'right' ? 'text-right' : ''
                  } ${col.className ?? ''}`}
                >
                  {col.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable

import { FiMoreVertical, FiTrendingUp } from 'react-icons/fi'
import type { Stat } from '../../data/dashboard'
import IconButton from '../ui/IconButton'

function StatCard({ label, value, trend }: Stat) {
  return (
    <article className="rounded-xl bg-white p-4">
      <div className="flex items-start justify-between">
        <p className="text-[13px] text-ink/80">{label}</p>
        <IconButton label={`${label} options`} className="-mt-1 -mr-2">
          <FiMoreVertical aria-hidden="true" />
        </IconButton>
      </div>
      <p className="mt-1 text-xl font-medium text-ink">{value}</p>
      <p className="mt-5 flex items-center gap-1 text-[11px] text-success">
        <FiTrendingUp aria-hidden="true" />
        {trend}
      </p>
    </article>
  )
}

export default StatCard

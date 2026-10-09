import { FiCalendar } from 'react-icons/fi'
import type { Birthday } from '../../data/dashboard'
import Card from '../ui/Card'

function UpcomingBirthdays({ birthdays }: { birthdays: Birthday[] }) {
  return (
    <Card title="Upcoming birthdays">
      <ul className="space-y-2">
        {birthdays.map((b) => (
          <li
            key={b.name}
            className="flex items-center gap-3 rounded-lg bg-primary-soft px-4 py-2.5"
          >
            <FiCalendar aria-hidden="true" className="shrink-0 text-primary" />
            <div>
              <p className="text-sm font-medium text-ink">{b.name}</p>
              <p className="mt-0.5 text-[11px] text-muted">{b.tier}</p>
            </div>
            <span className="ml-auto text-sm font-medium text-ink">
              {b.date}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default UpcomingBirthdays

import { useState } from 'react'
import {
  FiCalendar,
  FiChevronDown,
  FiFileText,
  FiMoreVertical,
} from 'react-icons/fi'
import type { Guest, GuestStatus } from '../../data/dashboard'
import Badge from '../ui/Badge'
import type { BadgeTone } from '../ui/Badge'
import Button from '../ui/Button'
import Card from '../ui/Card'
import DataTable from '../ui/DataTable'
import type { Column } from '../ui/DataTable'
import IconButton from '../ui/IconButton'
import Pagination from '../ui/Pagination'

const statusTone: Record<GuestStatus, BadgeTone> = {
  Suspended: 'orange',
  Active: 'green',
  Inactive: 'gray',
  Blacklisted: 'red',
}

const columns: Column<Guest>[] = [
  { key: 'fullName', header: 'Full name', render: (g) => g.fullName },
  {
    key: 'email',
    header: 'Email',
    className: 'max-w-[130px] break-words',
    render: (g) => g.email,
  },
  {
    key: 'phone',
    header: 'Phone',
    className: 'whitespace-nowrap',
    render: (g) => g.phone,
  },
  { key: 'totalBookings', header: 'Total Bookings', render: (g) => g.totalBookings },
  { key: 'totalSpend', header: 'Total Spend', render: (g) => g.totalSpend },
  { key: 'country', header: 'Country', render: (g) => g.country },
  { key: 'loyaltyTier', header: 'Loyalty Tier', render: (g) => g.loyaltyTier },
  {
    key: 'dateJoined',
    header: 'Date joined',
    className: 'whitespace-nowrap',
    render: (g) => g.dateJoined,
  },
  {
    key: 'status',
    header: 'Status',
    render: (g) => <Badge tone={statusTone[g.status]}>{g.status}</Badge>,
  },
  {
    key: 'actions',
    header: 'Actions',
    render: (g) => (
      <IconButton label={`Actions for ${g.email}`}>
        <FiMoreVertical aria-hidden="true" className="text-ink" />
      </IconButton>
    ),
  },
]

type HighValueGuestsProps = {
  guests: Guest[]
  total: number
  pageCount?: number
}

function HighValueGuests({ guests, total, pageCount = 3 }: HighValueGuestsProps) {
  const [page, setPage] = useState(1)

  return (
    <Card
      title="High value guests"
      titleExtra={
        <span className="inline-flex items-center gap-1.5 rounded-full bg-page px-2 py-0.5 text-xs font-medium text-ink">
          <span className="h-1.5 w-1.5 rounded-full bg-orange" />
          10
        </span>
      }
      action={
        <div className="flex items-center gap-2">
          <Button variant="outline" icon={<FiFileText aria-hidden="true" />}>
            Export csv
          </Button>
          <Button variant="soft">View all</Button>
        </div>
      }
    >
      <div className="mb-4 flex flex-wrap items-center gap-2 border-t border-line pt-4">
        <span className="mr-1 text-xs text-muted">Filter by</span>
        <Button
          variant="outline"
          trailingIcon={<FiChevronDown aria-hidden="true" />}
        >
          Location
        </Button>
        <Button variant="outline" icon={<FiCalendar aria-hidden="true" />}>
          Registration date
        </Button>
        <Button className="sm:ml-3">Apply filters</Button>
      </div>

      <DataTable
        columns={columns}
        rows={guests}
        rowKey={(g) => g.id}
        size="sm"
        minWidth="min-w-[900px]"
      />

      <footer className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-ink/80">
          Showing {guests.length} of {total}
        </p>
        <Pagination page={page} pageCount={pageCount} onChange={setPage} />
      </footer>
    </Card>
  )
}

export default HighValueGuests

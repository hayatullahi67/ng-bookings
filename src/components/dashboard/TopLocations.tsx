import type { BookingLocation } from '../../data/dashboard'
import Card from '../ui/Card'
import DataTable from '../ui/DataTable'
import type { Column } from '../ui/DataTable'

const columns: Column<BookingLocation>[] = [
  { key: 'rank', header: 'Rank', render: (row) => row.rank },
  { key: 'location', header: 'Location', render: (row) => row.location },
  {
    key: 'bookings',
    header: 'Bookings',
    align: 'right',
    className: 'font-medium',
    render: (row) => row.bookings,
  },
]

function TopLocations({ locations }: { locations: BookingLocation[] }) {
  return (
    <Card title="Top booking locations">
      <DataTable
        columns={columns}
        rows={locations}
        rowKey={(row) => row.rank}
      />
    </Card>
  )
}

export default TopLocations

import { FiCalendar } from 'react-icons/fi'
import DonutChart from '../components/charts/DonutChart'
import LineAreaChart from '../components/charts/LineAreaChart'
import ChurnAlerts from '../components/dashboard/ChurnAlerts'
import HighValueGuests from '../components/dashboard/HighValueGuests'
import StatCard from '../components/dashboard/StatCard'
import TopLocations from '../components/dashboard/TopLocations'
import UpcomingBirthdays from '../components/dashboard/UpcomingBirthdays'
import DashboardLayout from '../components/layout/DashboardLayout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import {
  activeVsInactive,
  churnAlerts,
  dateRange,
  guestSignups,
  highValueGuests,
  highValueGuestTotal,
  repeatVsNew,
  stats,
  topLocations,
  upcomingBirthdays,
} from '../data/dashboard'

function CrmDashboard() {
  return (
    <DashboardLayout>
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white px-4 py-4 sm:px-6 sm:py-5">
        <h1 className="font-display text-xl text-ink sm:text-2xl">
          CRM&nbsp; Dashboard
        </h1>
        <Button variant="outline" icon={<FiCalendar aria-hidden="true" />}>
          {dateRange}
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:gap-4 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_300px]">
        <Card title="New guest signups">
          <LineAreaChart
            data={guestSignups}
            seriesName="Sign ups"
            defaultIndex={4}
          />
        </Card>
        <Card title="Active vs inactive guests">
          <DonutChart segments={activeVsInactive} />
        </Card>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <ChurnAlerts alerts={churnAlerts} />
        <UpcomingBirthdays birthdays={upcomingBirthdays} />
      </div>

      <div className="grid gap-4 xl:grid-cols-[300px_minmax(0,1fr)]">
        <Card title="Repeat vs new customers">
          <DonutChart segments={repeatVsNew} />
        </Card>
        <TopLocations locations={topLocations} />
      </div>

      <HighValueGuests guests={highValueGuests} total={highValueGuestTotal} />
    </DashboardLayout>
  )
}

export default CrmDashboard

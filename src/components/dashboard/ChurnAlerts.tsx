import type { ChurnAlert } from '../../data/dashboard'
import Badge from '../ui/Badge'
import Card from '../ui/Card'

function ChurnAlerts({ alerts }: { alerts: ChurnAlert[] }) {
  return (
    <Card
      title="High churn alerts (2)"
      action={
        <a href="#retention" className="text-sm font-medium text-primary">
          Retention center
        </a>
      }
    >
      <ul className="divide-y divide-line rounded-xl border border-line">
        {alerts.map((alert) => (
          <li
            key={alert.name}
            className="flex items-center justify-between px-4 py-3"
          >
            <div>
              <p className="text-sm font-medium text-ink">{alert.name}</p>
              <p className="mt-0.5 text-[11px] text-muted">
                Last Login: {alert.lastLogin}
              </p>
            </div>
            <Badge tone="orange" shape="tag">
              {alert.risk}% risk
            </Badge>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default ChurnAlerts

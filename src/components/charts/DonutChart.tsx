import { Pie, PieChart, ResponsiveContainer } from 'recharts'
import type { DonutSegment } from '../../data/dashboard'

type DonutChartProps = {
  segments: DonutSegment[]
  size?: number
}

function DonutChart({ segments, size = 190 }: DonutChartProps) {
  const data = segments.map((s) => ({
    name: s.label,
    value: s.percent,
    fill: s.color,
  }))

  return (
    <div>
      <ResponsiveContainer width="100%" height={size}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius="72%"
            outerRadius="92%"
            startAngle={90}
            endAngle={-270}
            paddingAngle={4}
            cornerRadius={8}
            stroke="none"
            isAnimationActive={false}
          />
        </PieChart>
      </ResponsiveContainer>

      <ul className="mt-5 divide-y divide-line">
        {segments.map((s) => (
          <li
            key={s.label}
            className="flex items-center justify-between py-3 text-xs"
          >
            <span className="flex items-center gap-2 text-muted">
              <span
                className="h-3.5 w-1.5 rounded-sm"
                style={{ background: s.color }}
              />
              {s.label} • {s.percent}%
            </span>
            <span className="text-sm font-medium text-ink">
              {s.value.toLocaleString('en-US')}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DonutChart

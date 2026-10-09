import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { SeriesPoint } from '../../data/dashboard'

type ChartTooltipProps = {
  seriesName: string
  active?: boolean
  payload?: ReadonlyArray<{ payload?: SeriesPoint }>
}

function ChartTooltip({ seriesName, active, payload }: ChartTooltipProps) {
  const point = payload?.[0]?.payload
  if (!active || !point) return null

  return (
    <div className="w-40 rounded-lg bg-[#1b1b1f] p-3 text-xs text-white shadow-lg">
      <p className="mb-2">{point.tooltipLabel}</p>
      <div className="flex items-center justify-between rounded-md border border-white/15 px-2 py-1.5">
        <span className="text-white/60">{seriesName}</span>
        <span className="font-medium">{point.value}</span>
      </div>
    </div>
  )
}

type DotProps = { cx?: number; cy?: number; index?: number }

function renderDot({ cx, cy, index }: DotProps) {
  return (
    <g key={index}>
      <circle cx={cx} cy={cy} r={7} fill="var(--color-primary)" fillOpacity={0.2} />
      <circle cx={cx} cy={cy} r={3} fill="var(--color-primary)" />
    </g>
  )
}

type LineAreaChartProps = {
  data: SeriesPoint[]
  seriesName: string
  height?: number
  defaultIndex?: number
}

function LineAreaChart({
  data,
  seriesName,
  height = 320,
  defaultIndex,
}: LineAreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 16, right: 8, bottom: 0, left: 8 }}>
        <CartesianGrid horizontal={false} stroke="var(--color-line)" />
        <XAxis
          dataKey="label"
          tickLine={false}
          axisLine={{ stroke: 'var(--color-line)' }}
          tick={{ fontSize: 12, fill: 'var(--color-muted)' }}
          tickMargin={12}
          minTickGap={12}
          padding={{ left: 56, right: 56 }}
        />
        <YAxis hide domain={[0, (max: number) => Math.ceil(max * 1.1)]} />
        <Tooltip
          defaultIndex={defaultIndex}
          content={<ChartTooltip seriesName={seriesName} />}
          cursor={{ stroke: 'var(--color-primary-line)', strokeWidth: 1 }}
        />
        <Area
          type="linear"
          dataKey="value"
          stroke="var(--color-primary-line)"
          strokeWidth={1.5}
          fill="var(--color-primary)"
          fillOpacity={0.06}
          isAnimationActive={false}
          dot={renderDot}
          activeDot={{ r: 4, fill: 'var(--color-primary)', stroke: 'none' }}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default LineAreaChart

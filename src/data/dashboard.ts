export type Stat = {
  label: string
  value: string
  trend: string
}

export type SeriesPoint = {
  label: string
  tooltipLabel: string
  value: number
}

export type DonutSegment = {
  label: string
  percent: number
  value: number
  color: string
}

export type ChurnAlert = {
  name: string
  lastLogin: string
  risk: number
}

export type Birthday = {
  name: string
  tier: string
  date: string
}

export type BookingLocation = {
  rank: number
  location: string
  bookings: string
}

export type GuestStatus = 'Suspended' | 'Active' | 'Inactive' | 'Blacklisted'

export type Guest = {
  id: number
  fullName: string
  email: string
  phone: string
  totalBookings: number
  totalSpend: string
  country: string
  loyaltyTier: string
  dateJoined: string
  status: GuestStatus
}

export const currentUser = { name: 'Sharon', role: 'Super Admin' }

export const dateRange = 'Feb 16 - March 16'

export const stats: Stat[] = [
  { label: 'Total active guests', value: '400k', trend: '5% vs last month' },
  { label: 'Repeat bookings', value: '80.2%', trend: '5% vs last month' },
  { label: 'Open Support Tickets', value: '5', trend: '5% vs last month' },
  { label: 'Campaign Revenue', value: '₦100k', trend: '5% vs last month' },
]

export const guestSignups: SeriesPoint[] = [
  { label: 'Feb 16', tooltipLabel: 'February 16, 2026', value: 15 },
  { label: 'Feb 23', tooltipLabel: 'February 23, 2026', value: 23 },
  { label: 'March 2', tooltipLabel: 'March 2, 2026', value: 14 },
  { label: 'March 9', tooltipLabel: 'March 9, 2026', value: 15 },
  { label: 'March 16', tooltipLabel: 'March 16, 2026', value: 20 },
  { label: 'March 23', tooltipLabel: 'March 23, 2026', value: 9 },
]

export const activeVsInactive: DonutSegment[] = [
  { label: 'Active', percent: 55, value: 120000, color: 'var(--color-primary)' },
  { label: 'Inactive', percent: 45, value: 70000, color: 'var(--color-orange)' },
]

export const repeatVsNew: DonutSegment[] = [
  { label: 'Repeat', percent: 55, value: 120000, color: 'var(--color-success)' },
  { label: 'New', percent: 45, value: 70000, color: 'var(--color-orange)' },
]

export const churnAlerts: ChurnAlert[] = [
  { name: 'Leslie Alexander', lastLogin: '7-16-2026', risk: 70 },
  { name: 'Jenny Wilson', lastLogin: '7-16-2026', risk: 60 },
  { name: 'Courtney Henry', lastLogin: '7-16-2026', risk: 50 },
  { name: 'Wade Warren', lastLogin: '7-16-2026', risk: 40 },
]

export const upcomingBirthdays: Birthday[] = [
  { name: 'Bessie Cooper', tier: 'Gold member', date: '8/16/13' },
  { name: 'Eleanor Pena', tier: 'Gold member', date: '2/11/12' },
  { name: 'Wade Warren', tier: 'Platinum', date: '9/18/16' },
  { name: 'Arlene McCoy', tier: 'Platinum', date: '12/4/17' },
]

export const topLocations: BookingLocation[] = [
  { rank: 1, location: 'Lagos', bookings: '20,000' },
  { rank: 2, location: 'Ibadan', bookings: '1,000' },
  { rank: 3, location: 'Kano', bookings: '5000' },
  { rank: 4, location: 'Port-harcourt', bookings: '340' },
  { rank: 5, location: 'Enugu', bookings: '100' },
]

export const highValueGuestTotal = 48

export const highValueGuests: Guest[] = [
  {
    id: 1,
    fullName: 'Name',
    email: 'jackson.graham@example.com',
    phone: '(209) 555-0104',
    totalBookings: 1,
    totalSpend: '₦50,000.00',
    country: 'Nigeria',
    loyaltyTier: 'Gold',
    dateJoined: '16-03-2026',
    status: 'Suspended',
  },
  {
    id: 2,
    fullName: 'Name',
    email: 'debra.holt@example.com',
    phone: '(671) 555-0110',
    totalBookings: 2,
    totalSpend: '₦50,000.00',
    country: 'Nigeria',
    loyaltyTier: 'Silver',
    dateJoined: '16-03-2026',
    status: 'Active',
  },
  {
    id: 3,
    fullName: 'Name',
    email: 'tanya.hill@example.com',
    phone: '(303) 555-0105',
    totalBookings: 1,
    totalSpend: '₦50,000.00',
    country: 'Nigeria',
    loyaltyTier: 'Bronze',
    dateJoined: '16-03-2026',
    status: 'Inactive',
  },
  {
    id: 4,
    fullName: 'Name',
    email: 'tanya.hill@example.com',
    phone: '(303) 555-0105',
    totalBookings: 1,
    totalSpend: '₦50,000.00',
    country: 'Nigeria',
    loyaltyTier: 'Platinum',
    dateJoined: '16-03-2026',
    status: 'Blacklisted',
  },
]

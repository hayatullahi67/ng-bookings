import { useState } from 'react'
import type { IconType } from 'react-icons'
import { FaCaretDown, FaWhatsapp } from 'react-icons/fa'
import { FiSidebar, FiX } from 'react-icons/fi'
import {
  MdDashboard,
  MdGroups,
  MdPeopleAlt,
  MdSupportAgent,
} from 'react-icons/md'
import { currentUser } from '../../data/dashboard'
import Avatar from '../ui/Avatar'
import IconButton from '../ui/IconButton'

type SidebarItem = { label: string; icon: IconType }

const guestItems: SidebarItem[] = [
  { label: 'Guest Dashboard', icon: MdDashboard },
  { label: 'Guest Database', icon: MdPeopleAlt },
  { label: 'Guest segments', icon: MdGroups },
  { label: 'Whatsapp CRM', icon: FaWhatsapp },
  { label: 'Support center', icon: MdSupportAgent },
]

const marketingItems = [
  'Campaign manager',
  'Marketing automation',
  'Email marketing',
  'SMS Campaign manager',
  'Coupon manager',
  'Retention center',
]

type SidebarProps = {
  mobileOpen: boolean
  onClose: () => void
}

function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  const [active, setActive] = useState('Guest Dashboard')
  const [collapsed, setCollapsed] = useState(false)

  // Collapsing only applies on desktop; the mobile drawer is always full width.
  const hideWhenCollapsed = collapsed ? 'lg:hidden' : ''

  const select = (label: string) => {
    setActive(label)
    onClose()
  }

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity lg:hidden ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[272px] max-w-[85vw] shrink-0 overflow-y-auto bg-white p-5 shadow-xl transition-transform duration-200 lg:static lg:z-auto lg:max-w-none lg:translate-x-0 lg:self-start lg:overflow-visible lg:rounded-2xl lg:shadow-none ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        } ${collapsed ? 'lg:w-[84px]' : 'lg:w-[272px]'}`}
      >
        <div className="flex justify-end">
          <span className="lg:hidden">
            <IconButton label="Close menu" onClick={onClose}>
              <FiX aria-hidden="true" className="text-lg" />
            </IconButton>
          </span>
          <span className="hidden lg:block">
            <IconButton
              label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              onClick={() => setCollapsed((c) => !c)}
            >
              <FiSidebar aria-hidden="true" />
            </IconButton>
          </span>
        </div>

        <div className="mt-2 flex items-center gap-3">
          <Avatar tone="maroon" size="lg" />
          <span className={`font-display leading-tight ${hideWhenCollapsed}`}>
            <span className="block text-lg font-medium text-ink">
              {currentUser.name}
            </span>
            <span className="block text-xs text-muted">{currentUser.role}</span>
          </span>
          <FaCaretDown
            aria-hidden="true"
            className={`ml-auto text-ink ${hideWhenCollapsed}`}
          />
        </div>

        <nav aria-label="Guest management" className="mt-8 space-y-1.5">
          {guestItems.map(({ label, icon: Icon }) => {
            const isActive = label === active
            return (
              <button
                key={label}
                type="button"
                title={collapsed ? label : undefined}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => select(label)}
                className={`flex w-full cursor-pointer items-center gap-3 rounded-lg px-3.5 py-2.5 font-display text-[15px] transition-colors ${
                  isActive
                    ? 'bg-primary font-medium text-white'
                    : 'text-ink/80 hover:bg-page'
                }`}
              >
                <Icon aria-hidden="true" className="shrink-0 text-lg" />
                <span className={hideWhenCollapsed}>{label}</span>
              </button>
            )
          })}
        </nav>

        <div className={hideWhenCollapsed}>
          <p className="mt-8 px-3.5 text-[11px] tracking-wide text-muted uppercase">
            Marketing
          </p>
          <nav aria-label="Marketing" className="mt-3 space-y-1.5">
            {marketingItems.map((label) => (
              <button
                key={label}
                type="button"
                aria-current={label === active ? 'page' : undefined}
                onClick={() => select(label)}
                className={`block w-full cursor-pointer rounded-lg px-3.5 py-2.5 text-left font-display text-[15px] transition-colors ${
                  label === active
                    ? 'bg-primary font-medium text-white'
                    : 'text-ink/80 hover:bg-page'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  )
}

export default Sidebar

import { useState } from 'react'
import type { IconType } from 'react-icons'
import { FaRegHandshake, FaWhatsapp } from 'react-icons/fa'
import { FiHome, FiSettings, FiUser, FiUsers } from 'react-icons/fi'
import { MdChecklist, MdOutlineAccountBalance } from 'react-icons/md'

type NavItem = { label: string; icon: IconType }

const items: NavItem[] = [
  { label: 'Home', icon: FiHome },
  { label: 'Manage employee', icon: FiUser },
  { label: 'Manage guests', icon: FiUsers },
  { label: 'Finance', icon: MdOutlineAccountBalance },
  { label: 'Hr', icon: FiUsers },
  { label: 'Reservations', icon: MdChecklist },
  { label: 'Messages', icon: FaWhatsapp },
  { label: 'Partners', icon: FaRegHandshake },
  { label: 'Settings', icon: FiSettings },
]

function MainNav() {
  const [active, setActive] = useState('Manage guests')

  return (
    <div className="bg-white px-3 pb-4 md:px-6">
      <nav
        aria-label="Main"
        className="flex items-center justify-between gap-1 overflow-x-auto rounded-full bg-page px-3 py-2 [scrollbar-width:none] md:px-6"
      >
        {items.map(({ label, icon: Icon }) => {
          const isActive = label === active
          return (
            <button
              key={label}
              type="button"
              aria-current={isActive ? 'page' : undefined}
              onClick={() => setActive(label)}
              className={`flex shrink-0 cursor-pointer items-center gap-2 rounded-xl px-4 py-2.5 font-display text-[15px] transition-colors ${
                isActive
                  ? 'bg-primary text-white'
                  : 'text-muted hover:text-ink'
              }`}
            >
              <Icon aria-hidden="true" />
              {label}
            </button>
          )
        })}
      </nav>
    </div>
  )
}

export default MainNav

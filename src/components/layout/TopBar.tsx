import { FiBell, FiChevronDown, FiMenu, FiSearch } from 'react-icons/fi'
import { currentUser } from '../../data/dashboard'
import Avatar from '../ui/Avatar'
import IconButton from '../ui/IconButton'

function TopBar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 bg-white px-4 py-4 md:flex-nowrap md:px-6">
      <div className="flex items-center gap-2">
        <span className="lg:hidden">
          <IconButton label="Open menu" variant="soft" onClick={onMenuClick}>
            <FiMenu aria-hidden="true" />
          </IconButton>
        </span>
        <a
          href="/"
          className="font-display text-lg font-bold text-primary md:text-xl"
        >
          Ngbookings.com
        </a>
      </div>

      <label className="order-last flex w-full items-center gap-3 rounded-full bg-page px-5 py-3 text-muted md:order-none md:max-w-[520px]">
        <FiSearch aria-hidden="true" className="shrink-0 text-ink" />
        <input
          type="search"
          placeholder="Search"
          className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
        />
      </label>

      <div className="flex items-center gap-3 md:gap-4">
        <IconButton label="Notifications" variant="soft">
          <FiBell aria-hidden="true" />
        </IconButton>
        <button type="button" className="flex cursor-pointer items-center gap-3">
          <Avatar />
          <span className="hidden text-left font-display leading-tight sm:block">
            <span className="block text-[15px] font-medium text-ink">
              {currentUser.name}
            </span>
            <span className="block text-xs text-muted">{currentUser.role}</span>
          </span>
          <FiChevronDown
            aria-hidden="true"
            className="hidden text-ink sm:block md:ml-3"
          />
        </button>
      </div>
    </header>
  )
}

export default TopBar

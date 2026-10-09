import { useState } from 'react'
import type { ReactNode } from 'react'
import MainNav from './MainNav'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

function DashboardLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-svh bg-page">
      <TopBar onMenuClick={() => setMenuOpen(true)} />
      <MainNav />
      <div className="flex gap-4 p-3">
        <Sidebar mobileOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <main className="min-w-0 flex-1 space-y-3 lg:space-y-4">{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout

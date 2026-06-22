'use client'

import { ReactNode, useState } from 'react'
import Link from 'next/link'
import { Button, IconButton } from '@/components/Button'
import { Card } from '@/components/Badge'
import { BookOpen, Menu, X, Home, BookMarked, Users, Calendar, User, Settings, LogOut, Bell, Mail, Search } from 'lucide-react'

interface AppShellProps {
  children: ReactNode
  currentPage: string
  userRole?: 'student' | 'tutor' | 'admin'
}

export function AppShell({ children, currentPage, userRole = 'student' }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const navItems = {
    student: [
      { id: 'dashboard', label: 'Overview', icon: Home, href: '/dashboard' },
      { id: 'feed', label: 'Feed', icon: BookMarked, href: '/feed' },
      { id: 'tutors', label: 'Find Tutors', icon: Users, href: '/tutors' },
      { id: 'schedules', label: 'Sessions', icon: Calendar, href: '/schedules' },
      { id: 'profile', label: 'Profile', icon: User, href: '/profile' },
    ],
    tutor: [
      { id: 'dashboard', label: 'Overview', icon: Home, href: '/dashboard' },
      { id: 'feed', label: 'Feed', icon: BookMarked, href: '/feed' },
      { id: 'schedules', label: 'Availability', icon: Calendar, href: '/schedules' },
      { id: 'students', label: 'Students', icon: Users, href: '/students' },
      { id: 'profile', label: 'Profile', icon: User, href: '/profile' },
    ],
    admin: [
      { id: 'dashboard', label: 'Overview', icon: Home, href: '/dashboard' },
      { id: 'feed', label: 'Feed', icon: BookMarked, href: '/feed' },
      { id: 'admin', label: 'Admin', icon: Users, href: '/admin' },
      { id: 'profile', label: 'Profile', icon: User, href: '/profile' },
    ],
  }

  const currentNavItems = navItems[userRole]

  return (
    <div className="flex h-screen bg-canvas overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed md:relative z-40 h-full glass-card-strong transition-all duration-250 flex flex-col
          ${sidebarOpen ? 'w-64' : sidebarCollapsed ? 'w-24' : 'w-64'}
          md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          border-r border-white/60 rounded-none md:rounded-r-[28px]`}
      >
        {/* Logo */}
        <div className="p-6 flex items-center justify-between border-b border-white/20">
          {!sidebarCollapsed && (
            <Link href="/" className="flex items-center gap-3 font-semibold">
              <div className="w-8 h-8 bg-ink-900 rounded flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span>tutorly</span>
            </Link>
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="hidden md:block text-ink-600 hover:text-ink-900"
          >
            {sidebarCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-6 space-y-2">
          <p className={`text-xs font-semibold uppercase text-ink-400 px-3 mb-4 ${sidebarCollapsed ? 'hidden' : ''}`}>Main</p>
          {currentNavItems.map((item) => {
            const isActive = currentPage === item.id
            const Icon = item.icon
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-full transition-all h-10 ${
                  isActive
                    ? 'bg-accent-lavender-bg text-accent-lavender-fg'
                    : 'text-ink-600 hover:bg-white/30'
                }`}
                title={sidebarCollapsed ? item.label : undefined}
              >
                <Icon className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
                {!sidebarCollapsed && <span className="text-sm font-medium">{item.label}</span>}
              </Link>
            )
          })}
        </nav>

        {/* Settings & Account */}
        <div className="border-t border-white/20 p-4 space-y-3">
          <Link
            href="/settings"
            className={`flex items-center gap-3 px-4 py-2.5 rounded-full text-ink-600 hover:bg-white/30 transition-all h-10 ${
              currentPage === 'settings' ? 'bg-accent-lavender-bg text-accent-lavender-fg' : ''
            }`}
          >
            <Settings className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
            {!sidebarCollapsed && <span className="text-sm font-medium">Settings</span>}
          </Link>

          {/* Account Card */}
          <div className={`glass-card p-3 flex items-center gap-2 ${sidebarCollapsed ? 'flex-col' : ''}`}>
            <div className={`w-8 h-8 rounded-full bg-accent-lavender-bg flex-shrink-0 ${sidebarCollapsed ? '' : ''}`}></div>
            {!sidebarCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-ink-900 truncate">John Doe</p>
                <p className="text-xs text-ink-400">{userRole}</p>
              </div>
            )}
          </div>

          <button className={`w-full flex items-center gap-2 px-3 py-2 rounded-full text-ink-600 hover:bg-white/30 transition-all text-sm ${sidebarCollapsed ? 'justify-center' : ''}`}>
            <LogOut className="w-4 h-4" strokeWidth={2} />
            {!sidebarCollapsed && <span>Sign out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="glass-card sticky top-0 z-30 h-18 px-6 flex items-center justify-between border-b border-white/60 rounded-none md:rounded-bl-[28px]">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden text-ink-600 hover:text-ink-900"
            >
              <Menu className="w-6 h-6" strokeWidth={2} />
            </button>
            <p className="text-sm text-ink-600 hidden sm:block">
              tutorly <span className="text-ink-400">›</span> {currentPage}
            </p>
          </div>

          {/* Top bar actions */}
          <div className="flex items-center gap-2">
            <IconButton icon={<Search className="w-5 h-5" strokeWidth={2} />} label="Search" />
            <IconButton icon={<Bell className="w-5 h-5" strokeWidth={2} />} label="Notifications" />
            <IconButton icon={<Mail className="w-5 h-5" strokeWidth={2} />} label="Messages" />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 md:p-8 max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  )
}

'use client'

import { ReactNode, useState } from 'react'
import Link from 'next/link'
import { Button, IconButton } from '@/components/Button'
import { Card } from '@/components/Badge'
import { BookOpen, Menu, X, Home, BookMarked, Users, Calendar, User, Settings, LogOut, Bell, Mail, Search, Moon, Sun } from 'lucide-react'

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
      {/* Sidebar - Floating Squircle with Glassmorphism */}
      <aside
        className={`fixed md:relative z-40 m-4 md:m-6 h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] transition-all duration-300 flex flex-col
          ${sidebarOpen ? 'w-64' : sidebarCollapsed ? 'w-24' : 'w-64'}
          md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          rounded-3xl border`}
        style={{
          borderRadius: '32px',
          backgroundColor: 'var(--surface-glass)',
          backdropFilter: 'var(--blur-panel)',
          borderColor: 'var(--border)',
          boxShadow: 'var(--shadow-rest)'
        }}
      >
        {/* Logo */}
        <div className="p-6 flex items-center justify-between  border-border/30">
          {!sidebarCollapsed && (
            <Link href="/" className="flex items-center gap-3 font-semibold text-text-primary">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span>tutorly</span>
            </Link>
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="hidden md:block text-text-secondary hover:text-text-primary transition-colors"
          >
            {sidebarCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-6 space-y-2">
          <p className={`text-xs font-semibold uppercase text-text-secondary px-3 mb-4 ${sidebarCollapsed ? 'hidden' : ''}`}>Main</p>
          {currentNavItems.map((item, idx) => {
            const isActive = currentPage === item.id
            const Icon = item.icon
            const accentColors = [
              'bg-accent-lavender-bg text-accent-lavender-fg',
              'bg-accent-sky-bg text-accent-sky-fg',
              'bg-accent-mint-bg text-accent-mint-fg',
              'bg-accent-sun-bg text-accent-sun-fg',
              'bg-accent-coral-bg text-accent-coral-fg',
            ]
            const accentClass = accentColors[idx % accentColors.length]
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-full transition-all duration-200 h-10 ${
                  isActive
                    ? accentClass
                    : 'text-text-secondary hover:bg-surface-secondary/50 hover:text-text-primary'
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
        <div className=" border-border/30 p-4 space-y-3">
          <Link
            href="/settings"
            className={`flex items-center gap-3 px-4 py-2.5 rounded-full transition-all h-10 ${
              currentPage === 'settings' 
                ? 'bg-accent-sun-bg text-accent-sun-fg' 
                : 'text-text-secondary hover:bg-surface/30'
            }`}
          >
            <Settings className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
            {!sidebarCollapsed && <span className="text-sm font-medium">Settings</span>}
          </Link>



          {/* Account Card */}
          <div className={`glass-card p-3 flex items-center gap-2 ${sidebarCollapsed ? 'flex-col' : ''}`}>
            <div className={`w-8 h-8 rounded-full bg-accent-coral-bg flex-shrink-0 ${sidebarCollapsed ? '' : ''}`}></div>
            {!sidebarCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-text-primary truncate">John Doe</p>
                <p className="text-xs text-text-secondary">{userRole}</p>
              </div>
            )}
          </div>

          <button className={`w-full flex items-center gap-2 px-3 py-2 rounded-full text-text-secondary hover:bg-surface/30 transition-all text-sm ${sidebarCollapsed ? 'justify-center' : ''}`}>
            <LogOut className="w-4 h-4" strokeWidth={2} />
            {!sidebarCollapsed && <span>Sign out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 p-4 md:p-6">
        {/* Top Bar - Glassmorphism */}
        <header 
          className="sticky top-4 md:top-6 z-30 h-14 px-6 flex items-center justify-between rounded-2xl border transition-all duration-200"
          style={{
            backgroundColor: 'var(--surface-glass)',
            backdropFilter: 'var(--blur-panel)',
            borderColor: 'var(--border)',
            boxShadow: 'var(--shadow-rest)'
          }}
        >
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden text-text-secondary hover:text-text-primary transition-colors"
            >
              <Menu className="w-6 h-6" strokeWidth={2} />
            </button>
            <p className="text-sm text-text-secondary hidden sm:block">
              tutorly <span className="text-border">›</span> {currentPage}
            </p>
          </div>

          {/* Top bar actions */}
          <div className="flex items-center gap-2">
            <IconButton icon={<Search className="w-5 h-5" strokeWidth={2} />} label="Search" />
            <IconButton icon={<Bell className="w-5 h-5" strokeWidth={2} />} label="Notifications" />
            <IconButton icon={<Mail className="w-5 h-5" strokeWidth={2} />} label="Messages" />
            <button
              onClick={() => {
                const isDark = document.documentElement.classList.contains('dark-mode')
                if (isDark) {
                  document.documentElement.classList.add('light-mode')
                  document.documentElement.classList.remove('dark-mode')
                  localStorage.setItem('tutorly-theme', 'light')
                } else {
                  document.documentElement.classList.add('dark-mode')
                  document.documentElement.classList.remove('light-mode')
                  localStorage.setItem('tutorly-theme', 'dark')
                }
              }}
              className="p-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-surface/30 transition-colors"
              aria-label="Toggle theme"
            >
              <Moon className="w-4 h-4 dark-mode:hidden" strokeWidth={2} />
              <Sun className="w-4 h-4 light-mode:hidden hidden dark-mode:block" strokeWidth={2} />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl">
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

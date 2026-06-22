'use client'

import { AppShell } from '@/components/AppShell'
import { usePathname } from 'next/navigation'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  
  // Extract page name from pathname
  const getPageName = (path: string) => {
    const segments = path.split('/')
    const lastSegment = segments[segments.length - 1]
    
    const pageNames: Record<string, string> = {
      'dashboard': 'Overview',
      'feed': 'Feed',
      'tutors': 'Find Tutors',
      'profile': 'Profile',
      'schedules': 'Schedule',
      'students': 'My Students',
      'settings': 'Settings',
      'admin': 'Admin',
    }
    
    return pageNames[lastSegment] || 'Dashboard'
  }

  const currentPage = getPageName(pathname)

  return (
    <AppShell currentPage={currentPage} userRole="student">
      {children}
    </AppShell>
  )
}

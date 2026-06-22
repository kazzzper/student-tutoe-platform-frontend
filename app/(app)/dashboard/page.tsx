'use client'

import { Card } from '@/components/Badge'
import { Button } from '@/components/Button'
import { TrendingUp, Calendar, Users, BookMarked, ArrowRight } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-ink-900">Welcome back, John</h1>
          <p className="text-ink-600 mt-1">Here&apos;s your learning overview for this week</p>
        </div>
        <Button>
          + Schedule Session
          <ArrowRight className="w-4 h-4" strokeWidth={2} />
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Sessions This Week', value: '3', icon: Calendar, color: 'lavender' },
          { label: 'Active Tutors', value: '2', icon: Users, color: 'sky' },
          { label: 'Hours Learned', value: '8.5', icon: TrendingUp, color: 'mint' },
          { label: 'Progress', value: '76%', icon: BookMarked, color: 'sun' },
        ].map((stat, i) => {
          const Icon = stat.icon
          const colorMap: Record<string, string> = {
            lavender: 'bg-accent-lavender-bg text-accent-lavender-fg',
            sky: 'bg-accent-sky-bg text-accent-sky-fg',
            mint: 'bg-accent-mint-bg text-accent-mint-fg',
            sun: 'bg-accent-sun-bg text-accent-sun-fg',
          }
          
          return (
            <Card key={i} className="p-4">
              <div className={`w-10 h-10 rounded-xl ${colorMap[stat.color]} flex items-center justify-center mb-3`}>
                <Icon className="w-6 h-6" strokeWidth={2} />
              </div>
              <p className="text-2xl font-bold text-ink-900">{stat.value}</p>
              <p className="text-xs text-ink-600 mt-1">{stat.label}</p>
            </Card>
          )
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Upcoming Sessions */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-ink-900">Upcoming Sessions</h2>
            <Button variant="secondary" size="sm">View all</Button>
          </div>
          
          <div className="space-y-3">
            {[
              { tutor: 'Dr. Sarah Chen', subject: 'Mathematics', time: 'Today at 3:00 PM', color: 'lavender' },
              { tutor: 'Prof. James Wilson', subject: 'Physics', time: 'Tomorrow at 2:00 PM', color: 'sky' },
              { tutor: 'Ms. Emily Brown', subject: 'English', time: 'Friday at 4:30 PM', color: 'sun' },
            ].map((session, i) => {
              const colorMap: Record<string, string> = {
                lavender: 'bg-accent-lavender-bg text-accent-lavender-fg',
                sky: 'bg-accent-sky-bg text-accent-sky-fg',
                sun: 'bg-accent-sun-bg text-accent-sun-fg',
              }
              
              return (
                <Card key={i} hover className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className={`w-10 h-10 rounded-full ${colorMap[session.color]} flex-shrink-0`}></div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-ink-900 truncate">{session.tutor}</p>
                      <p className="text-xs text-ink-600">{session.subject}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-medium text-ink-900">{session.time}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Recommended Tutors */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-ink-900">Recommended</h2>
            <Button variant="secondary" size="sm">Browse</Button>
          </div>
          
          <div className="space-y-3">
            {[
              { name: 'Alex Johnson', rating: '4.9', students: '120+', subject: 'Math' },
              { name: 'Lisa Patel', rating: '4.8', students: '95+', subject: 'Science' },
              { name: 'Marco Rossi', rating: '4.7', students: '85+', subject: 'Languages' },
            ].map((tutor, i) => (
              <Card key={i} hover className="p-4">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="w-8 h-8 rounded-full bg-accent-lavender-bg"></div>
                  </div>
                  <p className="text-xs font-semibold text-accent-sun-fg bg-accent-sun-bg px-2 py-1 rounded-full">{tutor.subject}</p>
                </div>
                <p className="font-medium text-ink-900 truncate text-sm">{tutor.name}</p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xs text-ink-600">★ {tutor.rating}</p>
                  <p className="text-xs text-ink-400">{tutor.students} students</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Stats */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold text-ink-900 mb-4">This Week&apos;s Progress</h3>
          <div className="space-y-3">
            {[
              { label: 'Mathematics', progress: 75 },
              { label: 'Physics', progress: 60 },
              { label: 'English', progress: 90 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs font-medium text-ink-900">{item.label}</p>
                  <p className="text-xs text-ink-600">{item.progress}%</p>
                </div>
                <div className="w-full h-2 bg-ink-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent-lavender-fg to-accent-sky-fg rounded-full"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold text-ink-900 mb-4">Study Insights</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-accent-mint-fg mt-1">✓</span>
              <div>
                <p className="text-sm font-medium text-ink-900">You&apos;ve been consistent</p>
                <p className="text-xs text-ink-600">5 sessions this week</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-mint-fg mt-1">✓</span>
              <div>
                <p className="text-sm font-medium text-ink-900">Math improvement</p>
                <p className="text-xs text-ink-600">+15% since last week</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-sun-fg mt-1">→</span>
              <div>
                <p className="text-sm font-medium text-ink-900">Schedule more sessions</p>
                <p className="text-xs text-ink-600">Book with your tutors</p>
              </div>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}

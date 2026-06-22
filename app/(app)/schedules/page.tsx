'use client'

import { useState } from 'react'
import { Card } from '@/components/Badge'
import { Button } from '@/components/Button'
import { Badge } from '@/components/Badge'
import { ChevronLeft, ChevronRight, Clock, CheckCircle, AlertCircle } from 'lucide-react'

export default function SchedulesPage() {
  const [currentWeek, setCurrentWeek] = useState(0)

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const hours = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']

  const sessions = [
    {
      day: 0, // Monday
      hour: 1, // 10:00
      tutor: 'Dr. Sarah Chen',
      subject: 'Mathematics',
      duration: 1,
      status: 'confirmed',
      color: 'lavender',
    },
    {
      day: 2, // Wednesday
      hour: 3, // 12:00
      tutor: 'Prof. James Wilson',
      subject: 'Physics',
      duration: 1.5,
      status: 'pending',
      color: 'sky',
    },
    {
      day: 4, // Friday
      hour: 5, // 15:00
      tutor: 'Dr. Sarah Chen',
      subject: 'Mathematics',
      duration: 1,
      status: 'confirmed',
      color: 'lavender',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-ink-900">Your Schedule</h1>
          <p className="text-ink-600 mt-1">View and manage your tutoring sessions</p>
        </div>
        <Button>
          + Book Session
        </Button>
      </div>

      {/* Week Navigation */}
      <div className="glass-card p-4 flex items-center justify-between">
        <button onClick={() => setCurrentWeek(prev => Math.max(0, prev - 1))} className="p-2 hover:bg-white/30 rounded-lg">
          <ChevronLeft className="w-5 h-5 text-ink-900" strokeWidth={2} />
        </button>
        <p className="text-sm font-semibold text-ink-900">
          This Week
        </p>
        <button onClick={() => setCurrentWeek(prev => prev + 1)} className="p-2 hover:bg-white/30 rounded-lg">
          <ChevronRight className="w-5 h-5 text-ink-900" strokeWidth={2} />
        </button>
      </div>

      {/* Schedule Grid */}
      <div className="glass-card p-6 overflow-x-auto">
        <div className="min-w-full">
          {/* Header */}
          <div className="grid grid-cols-8 gap-2 mb-4 pb-4 border-b border-ink-200">
            <div></div>
            {days.map((day, i) => (
              <div key={i} className="text-center">
                <p className="text-xs font-semibold text-ink-600 uppercase">{day.slice(0, 3)}</p>
                <p className="text-sm font-bold text-ink-900 mt-1">{i + 1}</p>
              </div>
            ))}
          </div>

          {/* Time Slots */}
          <div className="space-y-2">
            {hours.map((hour, hourIdx) => (
              <div key={hourIdx} className="grid grid-cols-8 gap-2 items-center">
                <div className="text-xs font-medium text-ink-600 pr-2 text-right">{hour}</div>
                {days.map((day, dayIdx) => {
                  const session = sessions.find(s => s.day === dayIdx && s.hour === hourIdx)
                  const colorMap: Record<string, string> = {
                    lavender: 'bg-accent-lavender-bg',
                    sky: 'bg-accent-sky-bg',
                    mint: 'bg-accent-mint-bg',
                    sun: 'bg-accent-sun-bg',
                    coral: 'bg-accent-coral-bg',
                  }

                  if (session) {
                    return (
                      <div
                        key={dayIdx}
                        className={`${colorMap[session.color]} rounded-lg p-2 text-xs font-medium cursor-pointer hover:shadow-[var(--shadow-hover)] transition-all`}
                        style={{ gridRow: `span ${Math.ceil(session.duration)}` }}
                      >
                        <p className="font-semibold truncate">{session.subject}</p>
                        <p className="text-xs opacity-75">{session.tutor}</p>
                        {session.status === 'confirmed' && (
                          <div className="flex items-center gap-1 mt-1">
                            <CheckCircle className="w-3 h-3" strokeWidth={2} />
                            <span>Confirmed</span>
                          </div>
                        )}
                        {session.status === 'pending' && (
                          <div className="flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3" strokeWidth={2} />
                            <span>Pending</span>
                          </div>
                        )}
                      </div>
                    )
                  }

                  return (
                    <div key={dayIdx} className="min-h-16 border border-dashed border-ink-200 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"></div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sessions List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-ink-900">Upcoming Sessions</h2>
        
        {sessions.map((session, i) => (
          <Card key={i} className="p-4 md:p-6 flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 flex-1 min-w-0">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-lg font-semibold text-ink-900">{session.subject}</p>
                  {session.status === 'confirmed' && (
                    <Badge color={session.color as any} size="sm">
                      <CheckCircle className="w-3 h-3" strokeWidth={2} />
                      Confirmed
                    </Badge>
                  )}
                  {session.status === 'pending' && (
                    <Badge color="sun" size="sm">
                      <AlertCircle className="w-3 h-3" strokeWidth={2} />
                      Pending
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-ink-600 mb-3">{session.tutor}</p>
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-ink-400" strokeWidth={2} />
                    <span className="text-ink-600">{days[session.day]} at {hours[session.hour]}</span>
                  </div>
                  <span className="text-ink-400">{session.duration}h duration</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="secondary" size="sm">Join</Button>
              <button className="text-ink-400 hover:text-ink-900">⋯</button>
            </div>
          </Card>
        ))}
      </div>

      {/* Legend */}
      <Card className="p-4 md:p-6">
        <p className="text-sm font-semibold text-ink-900 mb-3">Legend</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-accent-mint-fg" strokeWidth={2} />
            <span className="text-xs text-ink-600">Confirmed</span>
          </div>
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-accent-sun-fg" strokeWidth={2} />
            <span className="text-xs text-ink-600">Pending</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-accent-coral-fg"></div>
            <span className="text-xs text-ink-600">Cancelled</span>
          </div>
        </div>
      </Card>
    </div>
  )
}

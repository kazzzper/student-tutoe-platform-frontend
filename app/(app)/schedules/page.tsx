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
          <h1 className="text-3xl font-bold text-text-primary">Your Schedule</h1>
          <p className="text-text-secondary mt-1">View and manage your tutoring sessions</p>
        </div>
        <Button>
          + Book Session
        </Button>
      </div>

      {/* Week Navigation */}
      <div 
        className="p-4 flex items-center justify-between rounded-2xl border transition-all duration-200"
        style={{
          backgroundColor: 'var(--surface-glass)',
          backdropFilter: 'var(--blur-panel)',
          borderColor: 'var(--border)',
          boxShadow: 'var(--shadow-rest)'
        }}
      >
        <button onClick={() => setCurrentWeek(prev => Math.max(0, prev - 1))} className="p-2 hover:bg-surface-secondary/50 rounded-lg transition-all duration-200 text-text-secondary hover:text-text-primary">
          <ChevronLeft className="w-5 h-5" strokeWidth={2} />
        </button>
        <p className="text-sm font-semibold text-text-primary">
          This Week
        </p>
        <button onClick={() => setCurrentWeek(prev => prev + 1)} className="p-2 hover:bg-surface-secondary/50 rounded-lg transition-all duration-200 text-text-secondary hover:text-text-primary">
          <ChevronRight className="w-5 h-5" strokeWidth={2} />
        </button>
      </div>

      {/* Schedule Grid */}
      <div 
        className="p-6 overflow-x-auto rounded-2xl border transition-all duration-200"
        style={{
          backgroundColor: 'var(--surface-glass)',
          backdropFilter: 'var(--blur-panel)',
          borderColor: 'var(--border)',
          boxShadow: 'var(--shadow-rest)'
        }}
      >
        <div className="min-w-full">
          {/* Header */}
          <div className="grid grid-cols-8 gap-2 mb-4 pb-4 border-b border-border/30">
            <div></div>
            {days.map((day, i) => (
              <div key={i} className="text-center">
                <p className="text-xs font-semibold text-text-secondary uppercase">{day.slice(0, 3)}</p>
                <p className="text-sm font-bold text-text-primary mt-1">{i + 1}</p>
              </div>
            ))}
          </div>

          {/* Time Slots */}
          <div className="space-y-2">
            {hours.map((hour, hourIdx) => (
              <div key={hourIdx} className="grid grid-cols-8 gap-2 items-center">
                <div className="text-xs font-medium text-text-secondary pr-2 text-right">{hour}</div>
                {days.map((day, dayIdx) => {
                  const session = sessions.find(s => s.day === dayIdx && s.hour === hourIdx)
                  const colorMap: Record<string, string> = {
                    lavender: 'bg-accent-lavender-bg text-accent-lavender-fg border-l-4 border-accent-lavender-fg',
                    sky: 'bg-accent-sky-bg text-accent-sky-fg border-l-4 border-accent-sky-fg',
                    mint: 'bg-accent-mint-bg text-accent-mint-fg border-l-4 border-accent-mint-fg',
                    sun: 'bg-accent-sun-bg text-accent-sun-fg border-l-4 border-accent-sun-fg',
                    coral: 'bg-accent-coral-bg text-accent-coral-fg border-l-4 border-accent-coral-fg',
                  }

                  if (session) {
                    return (
                      <div
                        key={dayIdx}
                        className={`${colorMap[session.color]} rounded-lg p-2 text-xs font-medium cursor-move transition-all duration-200 border-2 hover:shadow-hover hover:scale-105 hover:z-10`}
                        style={{ gridRow: `span ${Math.ceil(session.duration)}` }}
                        draggable
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
                    <div key={dayIdx} className="min-h-16 border-2 border-dashed border-border/50 rounded-lg hover:border-solid hover:border-primary/30 hover:bg-surface-secondary/30 transition-all duration-200 cursor-pointer"></div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sessions List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">Upcoming Sessions</h2>
        
        {sessions.map((session, i) => (
          <Card key={i} className="p-4 md:p-6 flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 flex-1 min-w-0">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-lg font-semibold text-text-primary">{session.subject}</p>
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
                <p className="text-sm text-text-secondary mb-3">{session.tutor}</p>
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-text-secondary" strokeWidth={2} />
                    <span className="text-text-secondary">{days[session.day]} at {hours[session.hour]}</span>
                  </div>
                  <span className="text-text-secondary">{session.duration}h duration</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="secondary" size="sm">Join</Button>
              <button className="text-text-secondary hover:text-text-primary transition-colors">⋯</button>
            </div>
          </Card>
        ))}
      </div>

      {/* Legend */}
      <Card className="p-4 md:p-6">
        <p className="text-sm font-semibold text-text-primary mb-3">Legend</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-accent-mint-fg" strokeWidth={2} />
            <span className="text-xs text-text-secondary">Confirmed</span>
          </div>
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-accent-sun-fg" strokeWidth={2} />
            <span className="text-xs text-text-secondary">Pending</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-accent-coral-fg"></div>
            <span className="text-xs text-text-secondary">Cancelled</span>
          </div>
        </div>
      </Card>
    </div>
  )
}

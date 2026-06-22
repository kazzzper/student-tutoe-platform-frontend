'use client'

import { Card } from '@/components/Badge'
import { Button } from '@/components/Button'
import { Badge } from '@/components/Badge'
import { Star, Mail, MessageCircle, Edit2, Calendar } from 'lucide-react'

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <Card className="p-8">
        <div className="flex flex-col md:flex-row gap-6 md:items-start">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-lavender-bg to-accent-sky-bg flex-shrink-0"></div>

          {/* Info */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl font-bold text-ink-900">John Doe</h1>
                <div className="flex items-center gap-2 mt-2">
                  <Badge color="lavender" size="sm">Student</Badge>
                  <span className="text-sm text-ink-600">Grade 11</span>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button variant="secondary" size="md">
                  <Edit2 className="w-4 h-4" strokeWidth={2} />
                  Edit Profile
                </Button>
                <Button size="md">
                  <MessageCircle className="w-4 h-4" strokeWidth={2} />
                  Contact
                </Button>
              </div>
            </div>

            <p className="text-ink-600 mb-4">
              Passionate learner focused on mathematics and physics. Working towards college entrance exams.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl font-bold text-ink-900">12</p>
                <p className="text-xs text-ink-600">Sessions</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-ink-900">3</p>
                <p className="text-xs text-ink-600">Active Tutors</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-ink-900">24</p>
                <p className="text-xs text-ink-600">Hours Learned</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* About */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-ink-900 mb-4">About</h2>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-ink-600 uppercase tracking-wider mb-1">Goal</p>
                <p className="text-ink-900">Improve grades in Mathematics and Physics for college entrance</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-ink-600 uppercase tracking-wider mb-1">Learning Style</p>
                <p className="text-ink-900">Visual learner with hands-on approach preference</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-ink-600 uppercase tracking-wider mb-1">Location</p>
                <p className="text-ink-900">New York, USA • EST Timezone</p>
              </div>
            </div>
          </Card>

          {/* Subjects & Expertise */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-ink-900 mb-4">Studying With</h2>
            <div className="space-y-4">
              {[
                { name: 'Mathematics', tutors: 2, color: 'lavender' },
                { name: 'Physics', tutors: 1, color: 'sky' },
                { name: 'Chemistry', tutors: 0, color: 'coral' },
              ].map((subject, i) => (
                <div key={i} className="flex items-center justify-between p-3 glass-card">
                  <div className="flex items-center gap-3">
                    <Badge color={subject.color as any} size="sm">
                      {subject.name}
                    </Badge>
                  </div>
                  <span className="text-xs font-medium text-ink-600">
                    {subject.tutors > 0 ? `${subject.tutors} tutor${subject.tutors !== 1 ? 's' : ''}` : 'Not started'}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Sessions */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-ink-900 mb-4">Recent Sessions</h2>
            <div className="space-y-3">
              {[
                { tutor: 'Dr. Sarah Chen', subject: 'Mathematics', date: 'Dec 15, 2024', rating: 5 },
                { tutor: 'Prof. James Wilson', subject: 'Physics', date: 'Dec 14, 2024', rating: 4 },
                { tutor: 'Dr. Sarah Chen', subject: 'Mathematics', date: 'Dec 12, 2024', rating: 5 },
              ].map((session, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white/30 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-ink-900">{session.tutor}</p>
                    <p className="text-xs text-ink-600">{session.subject} • {session.date}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className={`w-4 h-4 ${
                          j < session.rating
                            ? 'fill-current text-accent-sun-fg'
                            : 'text-ink-200'
                        }`}
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Current Tutors */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-ink-900 mb-4">Current Tutors</h2>
            <div className="space-y-4">
              {[
                { name: 'Dr. Sarah Chen', subject: 'Math', color: 'lavender' },
                { name: 'Prof. James Wilson', subject: 'Physics', color: 'sky' },
              ].map((tutor, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-accent-${tutor.color}-bg`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-ink-900 truncate">{tutor.name}</p>
                    <p className="text-xs text-ink-600">{tutor.subject}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Achievements */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-ink-900 mb-4">Achievements</h2>
            <div className="space-y-3">
              {[
                { icon: '🎯', title: 'Consistent Learner', desc: '10+ sessions' },
                { icon: '⭐', title: 'Top Rated', desc: '4.9/5 avg rating' },
                { icon: '🚀', title: 'Quick Learner', desc: '30% progress' },
              ].map((achievement, i) => (
                <div key={i} className="flex items-start gap-3 p-2">
                  <span className="text-lg">{achievement.icon}</span>
                  <div>
                    <p className="text-xs font-semibold text-ink-900">{achievement.title}</p>
                    <p className="text-xs text-ink-600">{achievement.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Availability */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-ink-900 mb-4">Preferred Time</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent-lavender-fg" strokeWidth={2} />
                <span className="text-sm text-ink-900">After school (3 PM - 8 PM)</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent-sky-fg" strokeWidth={2} />
                <span className="text-sm text-ink-900">Weekends anytime</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

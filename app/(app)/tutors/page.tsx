'use client'

import { useState } from 'react'
import { Card } from '@/components/Badge'
import { Button } from '@/components/Button'
import { Badge } from '@/components/Badge'
import { Star, Heart, MapPin, Clock } from 'lucide-react'

export default function TutorsPage() {
  const [liked, setLiked] = useState<Set<number>>(new Set())

  const toggleLike = (id: number) => {
    const newLiked = new Set(liked)
    if (newLiked.has(id)) {
      newLiked.delete(id)
    } else {
      newLiked.add(id)
    }
    setLiked(newLiked)
  }

  const tutors = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      rating: 4.9,
      students: 120,
      subjects: ['Mathematics', 'Physics', 'Calculus'],
      hourlyRate: 45,
      availability: 'Available now',
      description: 'Experienced math tutor with 8 years of teaching experience. Specializes in calculus and exam prep.',
      color: 'lavender',
    },
    {
      id: 2,
      name: 'Prof. James Wilson',
      rating: 4.8,
      students: 95,
      subjects: ['Physics', 'Chemistry', 'SAT Prep'],
      hourlyRate: 50,
      availability: 'Available in 2h',
      description: 'PhD in Physics. Passionate about making complex concepts easy to understand.',
      color: 'sky',
    },
    {
      id: 3,
      name: 'Ms. Emily Brown',
      rating: 4.7,
      students: 85,
      subjects: ['English', 'Literature', 'Essay Writing'],
      hourlyRate: 40,
      availability: 'Available now',
      description: 'Literature expert with a focus on critical thinking and essay composition.',
      color: 'sun',
    },
    {
      id: 4,
      name: 'Alex Johnson',
      rating: 4.9,
      students: 110,
      subjects: ['Computer Science', 'Programming', 'Web Dev'],
      hourlyRate: 55,
      availability: 'Available now',
      description: 'Software engineer turned tutor. Teaching coding with real-world examples.',
      color: 'mint',
    },
    {
      id: 5,
      name: 'Lisa Patel',
      rating: 4.8,
      students: 100,
      subjects: ['Biology', 'Chemistry', 'AP Exam Prep'],
      hourlyRate: 48,
      availability: 'Available tomorrow',
      description: 'Pharmacist and educator. Excellent at breaking down difficult science topics.',
      color: 'coral',
    },
    {
      id: 6,
      name: 'Marco Rossi',
      rating: 4.7,
      students: 75,
      subjects: ['Spanish', 'French', 'Italian'],
      hourlyRate: 42,
      availability: 'Available now',
      description: 'Native Italian speaker. Conversational fluency is my specialty.',
      color: 'tangerine',
    },
  ]

  const colorMap: Record<string, string> = {
    lavender: 'bg-accent-lavender-bg text-accent-lavender-fg',
    sky: 'bg-accent-sky-bg text-accent-sky-fg',
    mint: 'bg-accent-mint-bg text-accent-mint-fg',
    sun: 'bg-accent-sun-bg text-accent-sun-fg',
    coral: 'bg-accent-coral-bg text-accent-coral-fg',
    tangerine: 'bg-accent-tangerine-bg text-accent-tangerine-fg',
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-ink-900">Find Tutors</h1>
        <p className="text-ink-600 mt-1">Browse vetted tutors across all subjects</p>
      </div>

      {/* Filters */}
      <div className="glass-card p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Search tutors or subjects..."
          className="flex-1 min-w-[200px] h-11 px-4 rounded-full border border-ink-200 text-ink-900 placeholder-ink-400 focus:outline-none focus:border-accent-lavender-fg"
        />
        <select className="h-11 px-4 rounded-full border border-ink-200 text-ink-900 focus:outline-none focus:border-accent-lavender-fg">
          <option>All Subjects</option>
          <option>Mathematics</option>
          <option>Physics</option>
          <option>Chemistry</option>
          <option>English</option>
          <option>Languages</option>
        </select>
        <select className="h-11 px-4 rounded-full border border-ink-200 text-ink-900 focus:outline-none focus:border-accent-lavender-fg">
          <option>All Rates</option>
          <option>$20-$30</option>
          <option>$30-$50</option>
          <option>$50+</option>
        </select>
        <Button variant="secondary">Filter</Button>
      </div>

      {/* Tutors Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutors.map((tutor) => (
          <Card key={tutor.id} className="p-6 flex flex-col">
            {/* Header with Avatar and Like */}
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className={`w-12 h-12 rounded-full ${colorMap[tutor.color]} flex-shrink-0`}></div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-ink-900 truncate">{tutor.name}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-4 h-4 fill-current text-accent-sun-fg text-accent-sun-fg" strokeWidth={0} />
                    <span className="text-xs font-medium text-ink-900">{tutor.rating}</span>
                    <span className="text-xs text-ink-600">({tutor.students}+)</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => toggleLike(tutor.id)}
                className={`flex-shrink-0 transition-colors ${
                  liked.has(tutor.id)
                    ? 'text-accent-coral-fg'
                    : 'text-ink-400 hover:text-accent-coral-fg'
                }`}
              >
                <Heart className="w-5 h-5" strokeWidth={2} fill={liked.has(tutor.id) ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Description */}
            <p className="text-sm text-ink-600 mb-4 line-clamp-2">{tutor.description}</p>

            {/* Subjects */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tutor.subjects.slice(0, 2).map((subject, i) => (
                <Badge key={i} color={tutor.color as any} size="sm">
                  {subject}
                </Badge>
              ))}
              {tutor.subjects.length > 2 && (
                <Badge color={tutor.color as any} size="sm">
                  +{tutor.subjects.length - 2}
                </Badge>
              )}
            </div>

            {/* Availability and Rate */}
            <div className="space-y-2 mb-6 py-4 border-t border-b border-ink-200">
              <div className="flex items-center gap-2 text-xs">
                <Clock className="w-4 h-4 text-accent-mint-fg" strokeWidth={2} />
                <span className="text-ink-600">{tutor.availability}</span>
              </div>
              <div className="flex items-baseline justify-between">
                <p className="text-lg font-bold text-ink-900">${tutor.hourlyRate}</p>
                <p className="text-xs text-ink-600">/hour</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-auto">
              <Button variant="secondary" size="md" className="flex-1">
                View Profile
              </Button>
              <Button size="md" className="flex-1">
                Book Session
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

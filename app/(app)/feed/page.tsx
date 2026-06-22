'use client'

import { Card } from '@/components/Badge'
import { Button } from '@/components/Button'
import { Badge } from '@/components/Badge'
import { Heart, MessageCircle, Share2, Star } from 'lucide-react'

export default function FeedPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-ink-900">Your Feed</h1>
        <p className="text-ink-600 mt-1">Updates, recommendations, and insights from your tutors</p>
      </div>

      {/* Feed */}
      <div className="max-w-2xl space-y-6">
        {/* Post 1: Tutor Update */}
        <Card className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-12 h-12 rounded-full bg-accent-lavender-bg flex-shrink-0"></div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-ink-900">Dr. Sarah Chen</p>
                <p className="text-xs text-ink-600">Mathematics Tutor • 2 hours ago</p>
              </div>
            </div>
            <button className="text-ink-400 hover:text-ink-900">⋯</button>
          </div>

          <p className="text-ink-900 mb-4">
            I&apos;ve just created a new study guide for calculus! It covers derivatives, integrals, and applications. Free for all my current students! 📚
          </p>

          <div className="bg-accent-lavender-bg/30 p-4 rounded-lg mb-4">
            <p className="text-sm font-medium text-ink-900">New Study Guide: Calculus Essentials</p>
            <p className="text-xs text-ink-600 mt-1">5 chapters • 120 min read • Updated today</p>
          </div>

          <div className="flex items-center gap-4 text-ink-600">
            <button className="flex items-center gap-2 hover:text-accent-coral-fg transition-colors">
              <Heart className="w-5 h-5" strokeWidth={2} />
              <span className="text-xs">24</span>
            </button>
            <button className="flex items-center gap-2 hover:text-accent-sky-fg transition-colors">
              <MessageCircle className="w-5 h-5" strokeWidth={2} />
              <span className="text-xs">5</span>
            </button>
            <button className="flex items-center gap-2 hover:text-accent-mint-fg transition-colors">
              <Share2 className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>
        </Card>

        {/* Post 2: Student Achievement */}
        <Card className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-12 h-12 rounded-full bg-accent-mint-bg flex-shrink-0"></div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-ink-900">Prof. James Wilson</p>
                <p className="text-xs text-ink-600">Physics Tutor • 4 hours ago</p>
              </div>
            </div>
            <button className="text-ink-400 hover:text-ink-900">⋯</button>
          </div>

          <p className="text-ink-900 mb-4">
            Amazing progress this week! Keep up with the practice problems and you&apos;ll ace that exam. You&apos;ve got this! 🚀
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge color="sky" size="sm">Physics</Badge>
            <Badge color="sun" size="sm">Exam Prep</Badge>
            <Badge color="mint" size="sm">Achievement</Badge>
          </div>

          <div className="flex items-center gap-4 text-ink-600">
            <button className="flex items-center gap-2 hover:text-accent-coral-fg transition-colors">
              <Heart className="w-5 h-5" strokeWidth={2} />
              <span className="text-xs">18</span>
            </button>
            <button className="flex items-center gap-2 hover:text-accent-sky-fg transition-colors">
              <MessageCircle className="w-5 h-5" strokeWidth={2} />
              <span className="text-xs">3</span>
            </button>
          </div>
        </Card>

        {/* Post 3: Resource Share */}
        <Card className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-12 h-12 rounded-full bg-accent-sun-bg flex-shrink-0"></div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-ink-900">Ms. Emily Brown</p>
                <p className="text-xs text-ink-600">English Literature Tutor • 1 day ago</p>
              </div>
            </div>
            <button className="text-ink-400 hover:text-ink-900">⋯</button>
          </div>

          <p className="text-ink-900 mb-4">
            Recommended reading list for this month:
          </p>

          <div className="space-y-2 mb-4">
            {[
              { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
              { title: '1984', author: 'George Orwell' },
              { title: 'Jane Eyre', author: 'Charlotte Brontë' },
            ].map((book, i) => (
              <div key={i} className="p-3 bg-accent-sun-bg/20 rounded-lg border border-accent-sun-bg/30">
                <p className="text-sm font-medium text-ink-900">{book.title}</p>
                <p className="text-xs text-ink-600">{book.author}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 text-ink-600">
            <button className="flex items-center gap-2 hover:text-accent-coral-fg transition-colors">
              <Heart className="w-5 h-5" strokeWidth={2} />
              <span className="text-xs">32</span>
            </button>
            <button className="flex items-center gap-2 hover:text-accent-sky-fg transition-colors">
              <MessageCircle className="w-5 h-5" strokeWidth={2} />
              <span className="text-xs">8</span>
            </button>
          </div>
        </Card>

        {/* Post 4: Suggested Tutor */}
        <Card className="p-6 border-2 border-accent-lavender-bg/30">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-12 h-12 rounded-full bg-accent-coral-bg flex-shrink-0"></div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-ink-900">Marco Rossi</p>
                <p className="text-xs text-ink-600">Recommended Tutor • New</p>
              </div>
            </div>
            <Badge color="coral" size="sm">Suggested</Badge>
          </div>

          <p className="text-ink-900 font-medium mb-2">Languages & Linguistics</p>
          <p className="text-sm text-ink-600 mb-4">
            Marco specializes in European languages with a focus on conversational fluency. Perfect for exam prep!
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-current text-accent-sun-fg text-accent-sun-fg" strokeWidth={0} />
                <span className="text-sm font-medium text-ink-900">4.9</span>
              </div>
              <span className="text-xs text-ink-600">120+ students</span>
            </div>
            <Button size="sm">View Profile</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

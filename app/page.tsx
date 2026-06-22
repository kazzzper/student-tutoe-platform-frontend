'use client'

import Link from 'next/link'
import { Button } from '@/components/Button'
import { AetherBackground } from '@/components/AetherBackground'
import { ArrowRight, BookOpen, Sparkles, Zap } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-canvas relative overflow-hidden">
      {/* WebGL Animated Background */}
      <AetherBackground />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
        <nav 
          className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4 rounded-2xl border transition-all duration-200"
          style={{
            backgroundColor: 'var(--surface-glass)',
            backdropFilter: 'var(--blur-panel)',
            borderColor: 'var(--border)',
            boxShadow: 'var(--shadow-rest)'
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-lg font-semibold tracking-tight text-text-primary">tutorly</span>
          </div>
          
          <div className="hidden md:flex items-center gap-12">
            <a href="#how" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200">How it works</a>
            <a href="#tutors" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200">Find tutors</a>
            <a href="#resources" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200">Resources</a>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/signin" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200">
              Sign in
            </Link>
            <Link href="/signup">
              <Button size="md" className="text-sm">
                Get started
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 pt-40 pb-24 px-8">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div 
              className="inline-flex px-4 py-2 gap-2 rounded-full border"
              style={{
                backgroundColor: 'var(--surface-glass)',
                backdropFilter: 'var(--blur-panel)',
                borderColor: 'var(--border)'
              }}
            >
              <Sparkles className="w-4 h-4 text-accent" strokeWidth={2.5} />
              <span className="text-xs font-semibold text-text-primary uppercase tracking-wider">
                Next Generation Learning
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-text-primary">
              Unlock Your <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-accent to-purple bg-clip-text text-transparent">Potential</span>
            </h1>
            
            <p className="text-lg text-text-secondary max-w-lg leading-relaxed">
              Connect with elite educators through our premium learning infrastructure. No clutter, just world-class knowledge transfer.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <Link href="/signup">
                <Button size="lg" className="group">
                  Book a trial session
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Schedule Preview */}
          <div className="relative h-80 md:h-96 perspective">
            <div 
              className="p-6 h-full flex flex-col rounded-2xl border transition-all duration-200"
              style={{
                transform: 'rotateX(5deg) rotateY(-8deg) rotateZ(2deg)',
                backgroundColor: 'var(--surface-glass)',
                backdropFilter: 'var(--blur-panel)',
                borderColor: 'var(--border)',
                boxShadow: 'var(--shadow-rest)'
              }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-text-primary">Weekly Schedule</h3>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full bg-surface-secondary flex items-center justify-center hover:bg-primary/20 transition-all duration-200 text-text-primary">
                    <span>←</span>
                  </button>
                  <button className="w-8 h-8 rounded-full bg-surface-secondary flex items-center justify-center hover:bg-primary/20 transition-all duration-200 text-text-primary">
                    <span>→</span>
                  </button>
                </div>
              </div>
              
              {/* Mini Schedule Grid */}
              <div className="grid grid-cols-5 gap-2 flex-1 text-xs">
                <div></div>
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
                  <div key={day} className="text-center pb-2 border-b border-border/30 text-text-muted font-medium">
                    {day}
                  </div>
                ))}
                
                {/* Time slots */}
                <div className="text-text-muted">09:00</div>
                <div className="bg-accent-sky-bg/70 p-1 rounded border-2 border-accent-sky-bg text-accent-sky-fg font-medium hover:shadow-hover transition-all duration-200 cursor-pointer hover:scale-105">Math</div>
                <div></div>
                <div className="bg-accent-lavender-bg/70 p-1 rounded border-2 border-accent-lavender-bg text-accent-lavender-fg font-medium hover:shadow-hover transition-all duration-200 cursor-pointer hover:scale-105">Eco</div>
                <div></div>
                
                <div className="text-text-muted">11:00</div>
                <div></div>
                <div className="bg-accent-sun-bg/70 p-1 rounded border-2 border-accent-sun-bg text-accent-sun-fg font-medium hover:shadow-hover transition-all duration-200 cursor-pointer hover:scale-105">Art</div>
                <div></div>
                <div className="bg-accent-mint-bg/70 p-1 rounded border-2 border-accent-mint-bg text-accent-mint-fg font-medium hover:shadow-hover transition-all duration-200 cursor-pointer hover:scale-105">Bio</div>
                
                <div className="text-text-muted">13:00</div>
                <div className="bg-accent-coral-bg/70 p-1 rounded border-2 border-accent-coral-bg text-accent-coral-fg font-medium hover:shadow-hover transition-all duration-200 cursor-pointer hover:scale-105">Psych</div>
                <div></div>
                <div></div>
                <div className="bg-accent-tangerine-bg/70 p-1 rounded border-2 border-accent-tangerine-bg text-accent-tangerine-fg font-medium hover:shadow-hover transition-all duration-200 cursor-pointer hover:scale-105">Phys</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Stats Band */}
      <section className="relative z-10 bg-gradient-to-r from-surface/30 to-surface-secondary/20 backdrop-blur py-16 px-8 border-t border-border/30">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-text-primary mb-2">98%</p>
            <p className="text-xs font-semibold text-success uppercase tracking-wider">Success Rate</p>
          </div>
          <div className="text-center border-l border-border/30">
            <p className="text-4xl font-bold text-text-primary mb-2">15k+</p>
            <p className="text-xs font-semibold text-info uppercase tracking-wider">Active Students</p>
          </div>
          <div className="text-center border-l border-border/30">
            <p className="text-4xl font-bold text-text-primary mb-2">4.9/5</p>
            <p className="text-xs font-semibold text-warning uppercase tracking-wider">Tutor Rating</p>
          </div>
          <div className="text-center border-l border-border/30">
            <p className="text-4xl font-bold text-text-primary mb-2">24/7</p>
            <p className="text-xs font-semibold text-accent uppercase tracking-wider">Support Access</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="relative z-10 py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">How Tutorly Works</h2>
            <p className="text-lg text-text-secondary">Three simple steps to connect with the perfect tutor.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Create Your Profile', desc: 'Tell us about your learning goals and preferences.', color: 'accent-lavender' },
              { step: '02', title: 'Browse Tutors', desc: 'Find tutors by subject, availability, and ratings.', color: 'accent-sky' },
              { step: '03', title: 'Book a Session', desc: 'Schedule a session and start learning immediately.', color: 'accent-mint' },
            ].map((item) => (
              <div 
                key={item.step} 
                className="p-8 text-center rounded-2xl border transition-all duration-200 hover:shadow-hover hover:scale-105 cursor-pointer"
                style={{
                  backgroundColor: 'var(--surface-glass)',
                  backdropFilter: 'var(--blur-panel)',
                  borderColor: 'var(--border)'
                }}
              >
                <p className={`text-4xl font-bold mb-4`} style={{ color: `var(--${item.color}-fg)` }}>{item.step}</p>
                <h3 className="text-xl font-semibold text-text-primary mb-3">{item.title}</h3>
                <p className="text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-8 border-t border-border/30" style={{ background: 'var(--surface-secondary)' }}>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-text-primary">Ready to elevate your education?</h2>
          <p className="text-lg text-text-secondary">Join thousands of students already learning with Tutorly.</p>
          <Link href="/signup">
            <Button size="lg">
              Get started for free
              <ArrowRight className="w-5 h-5" strokeWidth={2} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-surface text-text-primary py-8 px-8 border-t border-border/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <p>&copy; 2024 Tutorly. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-text-secondary hover:text-accent transition-colors duration-200">Privacy</a>
            <a href="#" className="text-text-secondary hover:text-accent transition-colors duration-200">Terms</a>
            <a href="#" className="text-text-secondary hover:text-accent transition-colors duration-200">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

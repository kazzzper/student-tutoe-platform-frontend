'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { BookOpen, ArrowRight } from 'lucide-react'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    if (!formData.fullName) newErrors.fullName = 'Name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    if (!formData.password) newErrors.password = 'Password is required'
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)
    // TODO: API call to signup
    setTimeout(() => {
      setLoading(false)
      // Redirect to onboarding
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-canvas flex items-center justify-center px-4 py-12">
      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20" style={{
          background: 'rgba(231, 224, 255, 0.4)',
          filter: 'blur(120px)',
        }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-15" style={{
          background: 'rgba(217, 242, 228, 0.35)',
          filter: 'blur(120px)',
        }}></div>
      </div>

      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 bg-ink-900 rounded-lg flex items-center justify-center">
            <BookOpen className="w-7 h-7 text-white" strokeWidth={2.5} />
          </div>
          <h1 className="text-2xl font-bold text-ink-900">Create your account</h1>
          <p className="text-center text-ink-600 text-sm">
            Start your learning journey with Tutorly
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
          <Input
            label="Full Name"
            name="fullName"
            type="text"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />

          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            helper="At least 8 characters"
          />

          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="••••••••"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
          />

          {/* Terms checkbox */}
          <div className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="mt-1 w-4 h-4 rounded border-ink-200 accent-accent-lavender-fg cursor-pointer"
            />
            <label className="text-xs text-ink-600">
              I agree to the <a href="#" className="text-accent-lavender-fg font-medium hover:underline">Terms of Service</a> and <a href="#" className="text-accent-lavender-fg font-medium hover:underline">Privacy Policy</a>
            </label>
          </div>
          {errors.agreeTerms && <p className="text-xs text-accent-coral-fg font-medium">{errors.agreeTerms}</p>}

          <Button size="lg" type="submit" loading={loading} className="w-full">
            Create Account
            {!loading && <ArrowRight className="w-4 h-4" strokeWidth={2} />}
          </Button>
        </form>

        {/* Footer */}
        <div className="text-center space-y-4">
          <p className="text-sm text-ink-600">
            Already have an account?{' '}
            <Link href="/signin" className="font-medium text-accent-lavender-fg hover:underline">
              Sign in
            </Link>
          </p>
          <Link href="/" className="text-sm text-ink-400 hover:text-ink-600 transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}

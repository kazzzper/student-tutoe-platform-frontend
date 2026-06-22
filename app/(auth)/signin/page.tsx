'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { BookOpen, ArrowRight } from 'lucide-react'

export default function SigninPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
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

    if (!formData.email) newErrors.email = 'Email is required'
    if (!formData.password) newErrors.password = 'Password is required'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)
    // TODO: API call to signin
    setTimeout(() => {
      setLoading(false)
      // Redirect to dashboard
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
          <h1 className="text-2xl font-bold text-ink-900">Welcome back</h1>
          <p className="text-center text-ink-600 text-sm">
            Sign in to continue your learning journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <div className="space-y-2">
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />
            <div className="text-right">
              <Link href="/forgot-password" className="text-xs text-accent-lavender-fg hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Remember me checkbox */}
          <div className="flex items-center gap-3 pt-2">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="w-4 h-4 rounded border-ink-200 accent-accent-lavender-fg cursor-pointer"
            />
            <label htmlFor="rememberMe" className="text-sm text-ink-600">
              Remember me
            </label>
          </div>

          <Button size="lg" type="submit" loading={loading} className="w-full">
            Sign in
            {!loading && <ArrowRight className="w-4 h-4" strokeWidth={2} />}
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-ink-200"></div>
          <p className="text-xs text-ink-400">or</p>
          <div className="flex-1 h-px bg-ink-200"></div>
        </div>

        {/* Footer */}
        <div className="text-center space-y-4">
          <p className="text-sm text-ink-600">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="font-medium text-accent-lavender-fg hover:underline">
              Create one
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

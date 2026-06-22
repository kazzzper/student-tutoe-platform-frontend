'use client'

import { useState } from 'react'
import { Card } from '@/components/Badge'
import { Button } from '@/components/Button'
import { Input, Select } from '@/components/Input'
import { Bell, Lock, User, Palette, LogOut, ChevronRight } from 'lucide-react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'john@example.com',
    timezone: 'EST',
    language: 'English',
  })

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy & Security', icon: Lock },
    { id: 'appearance', label: 'Appearance', icon: Palette },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-ink-900">Settings</h1>
        <p className="text-ink-600 mt-1">Manage your account and preferences</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Navigation */}
        <div className="md:w-48">
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${
                    activeTab === tab.id
                      ? 'bg-accent-lavender-bg text-accent-lavender-fg font-medium'
                      : 'text-ink-600 hover:bg-white/30'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="flex-1">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-semibold text-ink-900 mb-6">Profile Information</h2>

                <div className="space-y-5">
                  <Input
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />

                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  <Select
                    label="Timezone"
                    name="timezone"
                    value={formData.timezone}
                    onChange={handleChange}
                    options={[
                      { value: 'UTC', label: 'UTC' },
                      { value: 'EST', label: 'EST' },
                      { value: 'CST', label: 'CST' },
                      { value: 'MST', label: 'MST' },
                      { value: 'PST', label: 'PST' },
                    ]}
                  />

                  <Select
                    label="Language"
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    options={[
                      { value: 'English', label: 'English' },
                      { value: 'Spanish', label: 'Spanish' },
                      { value: 'French', label: 'French' },
                      { value: 'German', label: 'German' },
                    ]}
                  />

                  <div className="flex gap-3 pt-4">
                    <Button>Save Changes</Button>
                    <Button variant="secondary">Cancel</Button>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-semibold text-ink-900 mb-6">Notification Preferences</h2>

                <div className="space-y-4">
                  {[
                    { label: 'Session Reminders', desc: 'Get notified 24 hours before sessions', enabled: true },
                    { label: 'New Messages', desc: 'Notify me when tutors send messages', enabled: true },
                    { label: 'Session Updates', desc: 'Updates on session status changes', enabled: true },
                    { label: 'Marketing Emails', desc: 'Promotional offers and news', enabled: false },
                    { label: 'Weekly Reports', desc: 'Summary of your learning progress', enabled: true },
                  ].map((item, i) => (
                    <label key={i} className="flex items-center justify-between p-4 glass-card cursor-pointer hover:bg-white/40 transition-colors">
                      <div>
                        <p className="font-medium text-ink-900">{item.label}</p>
                        <p className="text-xs text-ink-600 mt-1">{item.desc}</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={item.enabled}
                        readOnly
                        className="w-5 h-5 rounded accent-accent-lavender-fg cursor-pointer"
                      />
                    </label>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* Privacy & Security Tab */}
          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-semibold text-ink-900 mb-6">Privacy & Security</h2>

                <div className="space-y-4">
                  <div className="p-4 glass-card">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-medium text-ink-900">Change Password</p>
                        <p className="text-xs text-ink-600 mt-1">Update your password regularly for security</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-ink-400" strokeWidth={2} />
                    </div>
                  </div>

                  <div className="p-4 glass-card">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-medium text-ink-900">Two-Factor Authentication</p>
                        <p className="text-xs text-ink-600 mt-1">Add extra security to your account</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={false}
                        readOnly
                        className="w-5 h-5 rounded accent-accent-lavender-fg"
                      />
                    </div>
                  </div>

                  <div className="p-4 glass-card">
                    <div>
                      <p className="font-medium text-ink-900 mb-3">Blocked Users</p>
                      <p className="text-xs text-ink-600">You have blocked 0 users</p>
                    </div>
                  </div>

                  <div className="p-4 glass-card border-2 border-accent-coral-bg/30">
                    <p className="font-medium text-ink-900 mb-2">Delete Account</p>
                    <p className="text-xs text-ink-600 mb-4">Permanently delete your account and all data</p>
                    <Button variant="destructive" size="sm">Delete Account</Button>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Appearance Tab */}
          {activeTab === 'appearance' && (
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-semibold text-ink-900 mb-6">Appearance</h2>

                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-ink-900 mb-3">Theme</p>
                    <div className="flex gap-3">
                      <button className="flex-1 p-4 glass-card border-2 border-accent-lavender-fg text-center rounded-lg">
                        <p className="text-sm font-medium text-ink-900">Light</p>
                      </button>
                      <button className="flex-1 p-4 glass-card text-center rounded-lg hover:border-2 hover:border-ink-200 transition-all">
                        <p className="text-sm font-medium text-ink-900">Dark</p>
                      </button>
                      <button className="flex-1 p-4 glass-card text-center rounded-lg hover:border-2 hover:border-ink-200 transition-all">
                        <p className="text-sm font-medium text-ink-900">Auto</p>
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium text-ink-900 mb-3">Accent Color</p>
                    <div className="grid grid-cols-6 gap-3">
                      {[
                        { color: 'bg-accent-lavender-bg', name: 'Lavender' },
                        { color: 'bg-accent-sky-bg', name: 'Sky' },
                        { color: 'bg-accent-mint-bg', name: 'Mint' },
                        { color: 'bg-accent-sun-bg', name: 'Sun' },
                        { color: 'bg-accent-coral-bg', name: 'Coral' },
                        { color: 'bg-accent-tangerine-bg', name: 'Tangerine' },
                      ].map((item, i) => (
                        <button key={i} className={`w-12 h-12 rounded-lg ${item.color} hover:scale-110 transition-transform ring-2 ring-accent-lavender-bg ring-offset-2`} title={item.name}>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>

      {/* Sign Out */}
      <div className="pt-6 border-t border-ink-200">
        <Button variant="destructive">
          <LogOut className="w-4 h-4" strokeWidth={2} />
          Sign Out
        </Button>
      </div>
    </div>
  )
}

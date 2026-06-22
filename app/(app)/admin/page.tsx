'use client'

import { Card } from '@/components/Badge'
import { Button } from '@/components/Button'
import { Badge } from '@/components/Badge'
import { Users, Zap, AlertCircle, TrendingUp } from 'lucide-react'

export default function AdminPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-ink-900">Admin Dashboard</h1>
        <p className="text-ink-600 mt-1">Platform overview and management tools</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Users', value: '2,345', icon: Users, color: 'lavender', trend: '+12%' },
          { label: 'Active Sessions', value: '156', icon: Zap, color: 'mint', trend: '+8%' },
          { label: 'Avg Rating', value: '4.8/5', icon: TrendingUp, color: 'sky', trend: '+0.2' },
          { label: 'Issues', value: '3', icon: AlertCircle, color: 'coral', trend: '-2' },
        ].map((metric, i) => {
          const Icon = metric.icon
          const colorMap: Record<string, string> = {
            lavender: 'bg-accent-lavender-bg text-accent-lavender-fg',
            sky: 'bg-accent-sky-bg text-accent-sky-fg',
            mint: 'bg-accent-mint-bg text-accent-mint-fg',
            sun: 'bg-accent-sun-bg text-accent-sun-fg',
            coral: 'bg-accent-coral-bg text-accent-coral-fg',
          }
          
          return (
            <Card key={i} className="p-4">
              <div className={`w-10 h-10 rounded-xl ${colorMap[metric.color]} flex items-center justify-center mb-3`}>
                <Icon className="w-6 h-6" strokeWidth={2} />
              </div>
              <p className="text-2xl font-bold text-ink-900">{metric.value}</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-ink-600">{metric.label}</p>
                <p className="text-xs font-semibold text-accent-mint-fg">{metric.trend}</p>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Users */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-ink-900">Recent Users</h2>
            <Button variant="secondary" size="sm">View All</Button>
          </div>
          
          <div className="glass-card overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-ink-200">
                  <th className="text-left p-4 text-xs font-semibold text-ink-600 uppercase">Name</th>
                  <th className="text-left p-4 text-xs font-semibold text-ink-600 uppercase">Role</th>
                  <th className="text-left p-4 text-xs font-semibold text-ink-600 uppercase">Status</th>
                  <th className="text-left p-4 text-xs font-semibold text-ink-600 uppercase">Joined</th>
                  <th className="text-left p-4 text-xs font-semibold text-ink-600 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'John Doe', role: 'Student', status: 'active', joined: 'Dec 15' },
                  { name: 'Dr. Sarah Chen', role: 'Tutor', status: 'active', joined: 'Dec 14' },
                  { name: 'Prof. James Wilson', role: 'Tutor', status: 'active', joined: 'Dec 13' },
                  { name: 'Emily Brown', role: 'Student', status: 'active', joined: 'Dec 12' },
                  { name: 'Alex Johnson', role: 'Tutor', status: 'inactive', joined: 'Dec 10' },
                ].map((user, i) => (
                  <tr key={i} className="border-b border-ink-200 hover:bg-white/20 transition-colors">
                    <td className="p-4">
                      <p className="text-sm font-medium text-ink-900">{user.name}</p>
                    </td>
                    <td className="p-4">
                      <Badge color={user.role === 'Tutor' ? 'mint' : 'lavender'} size="sm">
                        {user.role}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <span className={`text-xs font-medium ${user.status === 'active' ? 'text-accent-mint-fg' : 'text-ink-400'}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-ink-600">{user.joined}</p>
                    </td>
                    <td className="p-4">
                      <button className="text-ink-400 hover:text-ink-900">⋯</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-ink-900">Quick Actions</h2>
          
          <div className="space-y-3">
            {[
              { label: 'View Reports', color: 'lavender' },
              { label: 'Manage Tutors', color: 'sky' },
              { label: 'View Analytics', color: 'mint' },
              { label: 'System Settings', color: 'sun' },
            ].map((action, i) => (
              <Card key={i} hover className="p-4 text-center">
                <p className="text-sm font-medium text-ink-900">{action.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Alerts */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-ink-900 mb-4">System Alerts</h2>
        
        <div className="space-y-3">
          {[
            { msg: 'Server performance above 95%', color: 'mint', icon: '✓' },
            { msg: '2 support tickets awaiting response', color: 'sun', icon: '!' },
            { msg: 'Weekly backup completed successfully', color: 'mint', icon: '✓' },
          ].map((alert, i) => (
            <div key={i} className="flex items-center gap-3 p-3 glass-card">
              <span className={`text-lg ${alert.color === 'mint' ? 'text-accent-mint-fg' : 'text-accent-sun-fg'}`}>
                {alert.icon}
              </span>
              <p className="text-sm text-ink-900 flex-1">{alert.msg}</p>
              <button className="text-ink-400 hover:text-ink-900">→</button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

'use client'

import { ReactNode } from 'react'

type AccentColor = 'lavender' | 'sky' | 'mint' | 'sun' | 'coral' | 'tangerine'

interface BadgeProps {
  children: ReactNode
  color?: AccentColor
  icon?: ReactNode
  size?: 'sm' | 'md'
}

const colorMap = {
  lavender: 'bg-accent-lavender-bg text-accent-lavender-fg',
  sky: 'bg-accent-sky-bg text-accent-sky-fg',
  mint: 'bg-accent-mint-bg text-accent-mint-fg',
  sun: 'bg-accent-sun-bg text-accent-sun-fg',
  coral: 'bg-accent-coral-bg text-accent-coral-fg',
  tangerine: 'bg-accent-tangerine-bg text-accent-tangerine-fg',
}

export function Badge({ children, color = 'lavender', icon, size = 'md' }: BadgeProps) {
  const sizeClasses = size === 'sm' ? 'px-3 py-1 text-xs' : 'px-4 py-1.5 text-sm'
  
  return (
    <div className={`rounded-full font-medium inline-flex items-center gap-2 ${colorMap[color]} ${sizeClasses}`}>
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </div>
  )
}

interface CardProps {
  children: ReactNode
  className?: string
  strong?: boolean
  hover?: boolean
}

export function Card({ children, className = '', strong = false, hover = false }: CardProps) {
  return (
    <div
      className={`
        ${strong ? 'glass-card-strong' : 'glass-card'}
        ${hover ? 'hover:shadow-[var(--shadow-hover)] hover:scale-[1.012] transition-all duration-180 cursor-pointer' : ''}
        p-5 ${className}
      `}
    >
      {children}
    </div>
  )
}

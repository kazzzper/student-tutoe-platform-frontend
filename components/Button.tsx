'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'destructive' | 'icon'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  loading?: boolean
  icon?: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  loading = false,
  icon,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses = 'rounded-full font-medium transition-all duration-150 inline-flex items-center justify-center gap-2'
  
  const variants = {
    primary: 'bg-ink-900 text-white hover:shadow-[var(--shadow-hover)] active:scale-95 disabled:bg-ink-200 disabled:text-ink-400',
    secondary: 'glass-card text-ink-900 hover:shadow-[var(--shadow-hover)] active:scale-95',
    destructive: 'bg-accent-coral-fg text-white hover:shadow-[var(--shadow-hover)] active:scale-95',
    icon: 'glass-card text-ink-900 rounded-full',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  }
  
  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${size !== 'sm' && variant !== 'icon' ? sizes[size] : variant === 'icon' ? 'w-10 h-10' : sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {icon && <span className={`${variant === 'icon' ? 'w-5 h-5' : iconSizes[size]}`}>{icon}</span>}
      {!loading && children}
      {loading && (
        <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
    </button>
  )
}

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  label?: string
}

export function IconButton({ icon, label, className = '', ...props }: IconButtonProps) {
  return (
    <button
      className={`glass-card w-10 h-10 rounded-full flex items-center justify-center text-ink-600 hover:text-ink-900 transition-colors ${className}`}
      aria-label={label}
      title={label}
      {...props}
    >
      <div className="w-5 h-5">{icon}</div>
    </button>
  )
}

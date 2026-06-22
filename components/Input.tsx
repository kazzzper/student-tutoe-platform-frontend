'use client'

import { InputHTMLAttributes, ReactNode } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: ReactNode
  helper?: string
}

export function Input({
  label,
  error,
  icon,
  helper,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-ink-600 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400 w-5 h-5">
            {icon}
          </div>
        )}
        <input
          className={`w-full h-11 rounded-[10px] border border-ink-200 bg-white text-ink-900 placeholder-ink-400 transition-all
            ${icon ? 'pl-10 pr-4' : 'px-4'}
            focus:border-accent-lavender-fg focus:outline-none focus:ring-2 focus:ring-accent-lavender-fg/20
            disabled:bg-ink-200 disabled:text-ink-400 disabled:cursor-not-allowed
            ${error ? 'border-accent-coral-fg focus:ring-accent-coral-fg/20' : ''}
            ${className}`}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-2 text-xs font-medium text-accent-coral-fg">{error}</p>
      )}
      {helper && !error && (
        <p className="mt-2 text-xs text-ink-600">{helper}</p>
      )}
    </div>
  )
}

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: { value: string; label: string }[]
  placeholder?: string
}

export function Select({
  label,
  error,
  options,
  placeholder,
  className = '',
  ...props
}: SelectProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-ink-600 mb-2">
          {label}
        </label>
      )}
      <select
        className={`w-full h-11 rounded-[10px] border border-ink-200 bg-white text-ink-900 px-4 transition-all
          focus:border-accent-lavender-fg focus:outline-none focus:ring-2 focus:ring-accent-lavender-fg/20
          disabled:bg-ink-200 disabled:text-ink-400 disabled:cursor-not-allowed
          ${error ? 'border-accent-coral-fg focus:ring-accent-coral-fg/20' : ''}
          ${className}`}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-2 text-xs font-medium text-accent-coral-fg">{error}</p>
      )}
    </div>
  )
}

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  rows?: number
}

export function Textarea({
  label,
  error,
  rows = 4,
  className = '',
  ...props
}: TextareaProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-ink-600 mb-2">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        className={`w-full rounded-[10px] border border-ink-200 bg-white text-ink-900 placeholder-ink-400 px-4 py-3 transition-all
          focus:border-accent-lavender-fg focus:outline-none focus:ring-2 focus:ring-accent-lavender-fg/20
          disabled:bg-ink-200 disabled:text-ink-400 disabled:cursor-not-allowed
          resize-none
          ${error ? 'border-accent-coral-fg focus:ring-accent-coral-fg/20' : ''}
          ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-2 text-xs font-medium text-accent-coral-fg">{error}</p>
      )}
    </div>
  )
}

// Utility functions for applying theme colors via inline styles

export const colors = {
  canvas: 'var(--canvas)',
  inkLight: 'var(--ink-900)',
  inkMed: 'var(--ink-600)',
  inkSoft: 'var(--ink-400)',
  inkVeryLight: 'var(--ink-200)',
  
  lavenderBg: 'var(--accent-lavender-bg)',
  lavenderFg: 'var(--accent-lavender-fg)',
  skyBg: 'var(--accent-sky-bg)',
  skyFg: 'var(--accent-sky-fg)',
  mintBg: 'var(--accent-mint-bg)',
  mintFg: 'var(--accent-mint-fg)',
  sunBg: 'var(--accent-sun-bg)',
  sunFg: 'var(--accent-sun-fg)',
  coralBg: 'var(--accent-coral-bg)',
  coralFg: 'var(--accent-coral-fg)',
  tangerineBg: 'var(--accent-tangerine-bg)',
  tangerineFg: 'var(--accent-tangerine-fg)',
} as const

export const shadows = {
  rest: 'var(--shadow-rest)',
  hover: 'var(--shadow-hover)',
  pop: 'var(--shadow-pop)',
} as const

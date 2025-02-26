// lib/utils.ts

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges class names with safety for Tailwind CSS
 * 
 * A more advanced version that combines clsx and tailwind-merge functionality
 * with additional safety checks and debugging support
 * 
 * @example
 * cn('p-2', ['text-red-500', 'bg-blue-200'], { 'font-bold': isBold }, null, undefined, false)
 * // => 'p-2 text-red-500 bg-blue-200 font-bold'
 * 
 * @param inputs - Class names to merge
 * @returns Optimized and deduplicated class string
 */
export const cn = (...inputs: ClassValue[]): string => {
  try {
    const merged = twMerge(
      clsx(
        // Process all inputs with clsx first
        ...inputs.filter(Boolean).map(input => 
          typeof input === 'string' 
            ? input.replace(/\s+/g, ' ').trim() // Normalize whitespace
            : input
        )
      )
    )

    // Development safety checks
    if (process.env.NODE_ENV === 'development') {
      // Detect invalid Tailwind classes
      const invalidClasses = merged.split(' ').filter(className => {
        return !/^([a-z0-9-]+:)?([a-z0-9/\[\]_-]+)$/.test(className)
      })

      if (invalidClasses.length > 0) {
        console.warn('[cn] Potentially invalid Tailwind classes:', invalidClasses)
      }
    }

    return merged
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('[cn] Error merging classes:', error)
    }
    return ''
  }
}
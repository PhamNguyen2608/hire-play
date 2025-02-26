// components/ui/button/styles.ts

import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  [
    // Base styles
    'inline-flex items-center justify-center rounded-md',
    'text-sm font-medium',
    'transition-all duration-200 ease-in-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent',
    'disabled:opacity-50 disabled:pointer-events-none',
    'ring-offset-background'
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-primary text-primary-foreground',
          'hover:bg-primary/90',
          'dark:bg-primary-dark dark:hover:bg-primary-dark/90'
        ],
        destructive: [
          'bg-destructive text-destructive-foreground',
          'hover:bg-destructive/90',
          'dark:bg-destructive-dark dark:hover:bg-destructive-dark/90'
        ],
        outline: [
          'border border-input',
          'hover:bg-accent hover:text-accent-foreground',
          'dark:border-input-dark dark:hover:bg-accent-dark'
        ],
        secondary: [
          'bg-secondary text-secondary-foreground',
          'hover:bg-secondary/80',
          'dark:bg-secondary-dark dark:hover:bg-secondary-dark/80'
        ],
        ghost: [
          'hover:bg-accent hover:text-accent-foreground',
          'dark:hover:bg-accent/80 dark:hover:text-accent-foreground'
        ],
        link: [
          'underline-offset-4 hover:underline',
          'text-primary hover:text-primary/80',
          'dark:text-primary-dark'
        ]
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md text-sm',
        lg: 'h-11 px-8 rounded-md text-base',
        icon: [
          'h-10 w-10 [&>svg]:size-4',
          'h-9 w-9 [&>svg]:size-3.5', // sm
          'h-11 w-11 [&>svg]:size-5' // lg
        ]
      }
    },
    compoundVariants: [
      // Kết hợp size và icon
      {
        size: 'icon',
        className: 'p-0 inline-flex items-center justify-center'
      },
      // Dark mode compound
      {
        variant: ['outline', 'ghost'],
        className: 'dark:ring-offset-background-dark'
      }
    ],
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)
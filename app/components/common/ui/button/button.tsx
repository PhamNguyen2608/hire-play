// components/ui/button.tsx
import React, { forwardRef, useMemo } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/app/lib/utils'
import { Loader2 } from 'lucide-react'
import { ButtonProps } from '@/app/types/components/button'
import { buttonVariants } from './styles'


const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      children,
      isLoading = false,
      disabled,
      leftIcon,
      rightIcon,
      loaderPosition = 'left',
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : 'button'

    const { content, icon } = useMemo(() => {
      if (isLoading) {
        const loader = (
          <Loader2
            className={cn(
              'animate-spin',
              loaderPosition === 'center' && 'absolute'
            )}
          />
        )

        return {
          content: loaderPosition !== 'center' && children,
          icon: {
            left: loaderPosition === 'left' && loader,
            right: loaderPosition === 'right' && loader
          }
        }
      }

      return {
        content: children,
        icon: {
          left: leftIcon,
          right: rightIcon
        }
      }
    }, [isLoading, children, leftIcon, rightIcon, loaderPosition])

    return (
      <Component
        className={cn(
          buttonVariants({ variant, size, className }),
          fullWidth && 'w-full',
          isLoading && 'relative',
        )}
        ref={ref}
        disabled={isLoading || disabled}
        aria-busy={isLoading}
        role="button"
        {...props}
      >
        {icon.left && (
          <span
            className={cn(
              'inline-flex mr-2',
              isLoading ? 'invisible' : ''
            )}
          >
            {icon.left}
          </span>
        )}

        <span className={cn({ 'invisible': isLoading })}>
          {content}
        </span>

        {icon.right && (
          <span
            className={cn(
              'inline-flex ml-2',
              isLoading ? 'invisible' : ''
            )}
          >
            {icon.right}
          </span>
        )}

        {loaderPosition === 'center' && isLoading && (
          <span className="absolute inset-0 flex items-center justify-center">
            {icon.left}
          </span>
        )}
      </Component>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
// components/ui/button/types.ts

import { VariantProps } from 'class-variance-authority'
import { buttonVariants } from './styles'

export type ButtonVariantProps = VariantProps<typeof buttonVariants>

export interface ButtonBaseProps {
  /** Render as child component using Radix Slot */
  asChild?: boolean
  /** Show loading state */
  isLoading?: boolean
  /** Icon to display on the left */
  leftIcon?: React.ReactNode
  /** Icon to display on the right */
  rightIcon?: React.ReactNode
  /** Position of loader during loading state */
  loaderPosition?: 'left' | 'right' | 'center'
  /** Make button full width */
  fullWidth?: boolean
  /** Custom loader component */
  loader?: React.ReactNode
  /** Disable button */
  disabled?: boolean
  /** Button type */
  type?: 'button' | 'submit' | 'reset'
  /** Button variant */
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link'
  /** Button size */
  size?: 'default' | 'sm' | 'lg' | 'icon'
  /** Button className */
  className?: string
  /** Button ref */
  ref?: React.RefObject<HTMLButtonElement>
  /** Button onClick */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** Button onMouseEnter */
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** Button onMouseLeave */
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** Button onMouseDown */
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** Button onMouseUp */
  onMouseUp?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** Button onMouseMove */
  onMouseMove?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** Button onMouseOut */
  onMouseOut?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** Button onTouchStart */
  onTouchStart?: (event: React.TouchEvent<HTMLButtonElement>) => void
  /** Button onTouchEnd */
  onTouchEnd?: (event: React.TouchEvent<HTMLButtonElement>) => void
  /** Button onTouchMove */
  onTouchMove?: (event: React.TouchEvent<HTMLButtonElement>) => void
  /** Button onKeyDown */
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void
  /** Button onKeyUp */
  onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void
  /** Button onKeyPress */
  onKeyPress?: (event: React.KeyboardEvent<HTMLButtonElement>) => void
  /** Button onFocus */
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void
  /** Button onBlur */
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void
  /** Button onContextMenu */
  onContextMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** Button onDrag */
  onDrag?: (event: React.DragEvent<HTMLButtonElement>) => void
  /** Button onDragEnd */
  onDragEnd?: (event: React.DragEvent<HTMLButtonElement>) => void
  /** Button onDragEnter */
  onDragEnter?: (event: React.DragEvent<HTMLButtonElement>) => void
  /** Button onDragLeave */
  onDragLeave?: (event: React.DragEvent<HTMLButtonElement>) => void
  /** Button onDragOver */
  onDragOver?: (event: React.DragEvent<HTMLButtonElement>) => void
  /** Button onDragStart */
  onDragStart?: (event: React.DragEvent<HTMLButtonElement>) => void
  /** Button onDrop */
  onDrop?: (event: React.DragEvent<HTMLButtonElement>) => void

  /** Button onAnimationStart */
  onAnimationStart?: (event: React.AnimationEvent<HTMLButtonElement>) => void
  /** Button onAnimationEnd */
  onAnimationEnd?: (event: React.AnimationEvent<HTMLButtonElement>) => void
  /** Button onAnimationIteration */
  onAnimationIteration?: (event: React.AnimationEvent<HTMLButtonElement>) => void
  

  
  
  
  
  
  
  
  
}

export interface ButtonProps 
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    ButtonVariantProps,
    ButtonBaseProps {}
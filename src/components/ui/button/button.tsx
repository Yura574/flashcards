import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children?: ReactNode
  className?: string
  fullWidth?: boolean
  icon?: string
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth,
    icon,
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component
      className={`${s.reset} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...rest}
    >
      {icon && <img alt={'icon'} className={s.iconButton} src={icon} />} {children}
    </Component>
  )
}

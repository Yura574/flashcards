import { ComponentPropsWithoutRef } from 'react'

import s from './button.module.scss'

export type ButtonProps = {
  fullWidth?: boolean
  name?: string
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<'button'>

export const Button = ({
  className,
  fullWidth = false,
  name = 'Button',
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <button className={`${s[variant]} ${fullWidth ? s.fullWidth : ''}`} {...rest}>
      {name}
    </button>
  )
}

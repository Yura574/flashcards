import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './_input.module.scss'

export type InputProps<T extends ElementType = 'input'> = {
  as?: T
  classname?: string
  variant?: 'default' | 'password' | 'search'
} & ComponentPropsWithoutRef<T>

export const Input = <T extends ElementType = 'input'>(props: InputProps<T>) => {
  const { as: Component = 'input', classname } = props

  return <Component className={`${s.reset} ${classname}`} />
}

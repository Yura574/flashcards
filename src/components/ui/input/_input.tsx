import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './_input.module.scss'

export type InputProps<T extends ElementType = 'input'> = {
  as?: T
  classname?: string
  error?: string
  label?: string
  variant?: 'default' | 'password' | 'search'
} & ComponentPropsWithoutRef<T>

export const Input = <T extends ElementType = 'input'>(props: InputProps<T>) => {
  const { as: Component = 'input', classname, error, label, variant } = props

  return (
    <div className={s.inputWrapper}>
      {label && (
        <label className={s.label} htmlFor={'inputComponent'}>
          input
        </label>
      )}
      <Component
        className={`${s.reset} ${variant && s[variant]}  ${classname}`}
        id={'inputComponent'}
      />
      {error && <div className={s.error}>{error}</div>}
    </div>
  )
}

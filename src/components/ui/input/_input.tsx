import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './_input.module.scss'

export type InputProps<T extends ElementType = 'input'> = {
  as?: T
  classname?: string
  disabled?: boolean
  error?: string
  label?: string
  variant?: 'default' | 'password' | 'search'
} & ComponentPropsWithoutRef<T>

export const Input = <T extends ElementType = 'input'>(
  props: InputProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof InputProps<T>>
) => {
  const {
    as: Component = 'input',
    classname,
    disabled = false,
    error,
    label,
    variant,
    ...rest
  } = props

  return (
    <form className={s.wrapper}>
      {label && (
        <label className={s.label} htmlFor={'inputComponent'}>
          input
        </label>
      )}
      <div className={s.inputWrapper}>
        <Component
          className={`${s.reset} ${variant && s[variant]} ${disabled ? s.disabled : ''} ${
            error && s.errorInput
          }  ${classname}`}
          disabled={disabled}
          id={'inputComponent'}
          {...rest}
        />
        {variant === 'search' && rest.value && <button className={s.absoluteButton}>x</button>}
      </div>
      {error && <div className={s.error}>{error}</div>}
    </form>
  )
}

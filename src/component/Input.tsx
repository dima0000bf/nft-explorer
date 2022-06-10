import { ChangeEvent, CSSProperties } from 'react'

type InputProps = {
  value: string
  onChange?: (value: string) => void
  style?: CSSProperties
  placeholder?: string
}

export const Input = ({ value, onChange, style, placeholder }: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <input placeholder={placeholder} style={style} value={value} onChange={handleChange} />
  )
}

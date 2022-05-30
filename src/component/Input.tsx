import { ChangeEvent, CSSProperties } from 'react'

export const Input = ({
  value,
  onChange,
  style,
  placeholder,
}: {
  value: string
  onChange?: (value: string) => void
  style?: CSSProperties
  placeholder?: string
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <input
      placeholder={placeholder}
      style={style}
      value={value}
      onChange={handleChange}
    />
  )
}

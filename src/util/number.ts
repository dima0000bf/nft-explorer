export function toHex(num: string | number | bigint, preservePrefix = false) {
  const prefix = preservePrefix ? '0x' : ''

  return `${prefix}${BigInt(num).toString(16)}`
}

export function makeAddress(address: string) {
  return `0:${address}` as const
}

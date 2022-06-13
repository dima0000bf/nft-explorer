import { useEffect, useState } from 'react'

export function useAsyncMemo<T>(
  factory: () => Promise<T>,
  deps: React.DependencyList | undefined
): [result: T | undefined, filled: boolean] {
  const [result, setResult] = useState<T>()
  const [filled, setFilled] = useState(false)

  useEffect(() => {
    factory().then((value) => {
      setResult(value)
      setFilled(true)
    })
  }, deps)

  return [result, filled]
}

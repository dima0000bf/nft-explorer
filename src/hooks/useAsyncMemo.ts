import { useCallback, useEffect, useState } from 'react'

export function useAsyncMemo<T>(
  factory: () => Promise<T>,
  deps: React.DependencyList | undefined
) {
  const [result, setResult] = useState<T>()
  const [filled, setFilled] = useState(false)

  useEffect(() => {
    setResult(undefined)
    setFilled(false)

    factory()
      .then((value) => {
        setResult(value)
      })
      .finally(() => {
        setFilled(true)
      })
  }, deps)

  return [result, filled] as const
}

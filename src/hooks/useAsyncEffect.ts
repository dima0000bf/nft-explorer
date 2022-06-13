import { useEffect } from 'react'

/** Fork from https://github.com/rauldeheer/use-async-effect cuz lib is shit */
export function useAsyncEffect(
  effect: (isActive: () => boolean) => unknown | Promise<unknown>,
  deps?: any[]
): void
export function useAsyncEffect(
  effect: (isActive: () => boolean) => unknown | Promise<unknown>,
  onDestroy?: VoidFunction,
  deps?: any[]
): void

export function useAsyncEffect(
  effect: (isActive: () => boolean) => unknown | Promise<unknown>,
  onDestroy?: VoidFunction | any[],
  deps?: any[]
) {
  const hasDestroy = typeof onDestroy === 'function'

  useEffect(
    () => {
      let mounted = true
      const maybePromise = effect(() => mounted)

      Promise.resolve(maybePromise)

      return () => {
        mounted = false

        if (hasDestroy && typeof onDestroy === 'function') {
          onDestroy()
        }
      }
    },
    hasDestroy ? deps : onDestroy
  )
}

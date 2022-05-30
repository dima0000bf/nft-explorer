import { useCallback, useState } from 'react'
import { findSupportedInterface, ItemInterface } from '@/util/nft-interface'

export function useFindSupportedInterface() {
  const [loading, setLoading] = useState(false)
  const [intf, setIntf] = useState<ItemInterface | null>(null)

  const runSearch = useCallback(async (address: string) => {
    setLoading(true)

    const intf = await findSupportedInterface(address)
    if (intf === 'unsupported') setIntf(null)
    else setIntf(intf)

    setLoading(false)
    return intf
  }, [])

  const clear = useCallback(() => {
    setIntf(null)
  }, [])

  return [runSearch, loading, intf, clear] as [
    search: typeof runSearch,
    isLoading: boolean,
    intf: ItemInterface | null,
    clear: VoidFunction
  ]
}

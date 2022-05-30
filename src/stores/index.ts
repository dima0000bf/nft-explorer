import { userRpcClient } from 'hooks/useRpsClient'
import { WalletStore } from './WalletStore'

const rpc = userRpcClient()

const stores = {
  walletStore: new WalletStore(rpc),
}

export function useStores() {
  return stores
}

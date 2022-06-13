import { COLLECTION_ABI } from '@/abis/Collection.abi'
import { userRpcClient } from '@/hooks/useRpsClient'
import { Address, ProviderRpcClient } from 'everscale-inpage-provider'

class CollectionAbiService {
  constructor(private readonly rpc: ProviderRpcClient) {}

  public async getCodeHash(itemAdr: string) {
    const collCtc = new this.rpc.Contract(COLLECTION_ABI, new Address(itemAdr))

    // 72054128800...
    const { codeHash } = await collCtc.methods
      .nftCodeHash({ answerId: 0 })
      .call({ responsible: true })
    return codeHash
  }
}

const rpc = userRpcClient()

export const collectionAbiService = new CollectionAbiService(rpc)

import { NFT_ABI } from 'abis/Nft.abi'
import { Address, ProviderRpcClient } from 'everscale-inpage-provider'
import { userRpcClient } from 'hooks/useRpsClient'

class NftAbiSerivce {
  constructor(private readonly rpc: ProviderRpcClient) {}

  public async getJson(address: string) {
    const contract = new this.rpc.Contract(NFT_ABI, new Address(address))

    const { json } = await contract.methods
      .getJson({ answerId: 0 })
      .call({ responsible: true })
    return json
  }

  public async getInfo(address: string) {
    const contract = new this.rpc.Contract(NFT_ABI, new Address(address))
    const info = await contract.methods.getInfo({ answerId: 0 }).call({ responsible: true })
    return info
  }

  public async supportsInterface(address: string, interfaceID: string | number) {
    const contract = new this.rpc.Contract(NFT_ABI, new Address(address))
    const { value0: isSupports } = await contract.methods
      .supportsInterface({ answerId: 0, interfaceID })
      .call({ responsible: true })
    return isSupports
  }
}

const rpc = userRpcClient()

export const nftAbiService = new NftAbiSerivce(rpc)

import { Address, ProviderRpcClient, WalletContractType } from 'everscale-inpage-provider'
import { action, makeObservable, observable } from 'mobx'

type Account = {
  address: Address
  publicKey: string
  contractType: WalletContractType
}

export class WalletStore {
  @observable public $hasExtension: boolean | 'unknown' = 'unknown'
  @observable public $isPermited: boolean | 'unknown' = 'unknown'
  @observable public $account: Account | null = null

  constructor(private readonly rpc: ProviderRpcClient) {
    makeObservable(this)
  }

  public async checkExtension() {
    this.$hasExtension = await this.rpc.hasProvider()
    await this.rpc.ensureInitialized()
    return this.$hasExtension
  }

  public async requestPermissions() {
    const { accountInteraction } = await this.rpc.requestPermissions({
      permissions: ['basic', 'accountInteraction'],
    })

    this.$account = accountInteraction || null
    this.$isPermited = !!this.$account
  }

  public async cancelPermission() {
    await this.rpc.disconnect()
    this.$account = null
    this.$isPermited = false
  }

  public async checkIsPermitted() {
    try {
      const state = await this.rpc.getProviderState()
      this.$account = state.permissions.accountInteraction || null
      this.$isPermited = !!this.$account
    } catch {
      this.$isPermited = false
    }
  }
}

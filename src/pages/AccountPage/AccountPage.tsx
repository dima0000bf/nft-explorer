import { Input } from '@/component/Input'
import { useFindSupportedInterface } from '@/hooks/useFindSupportedInterface'
import { observer } from 'mobx-react-lite'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { ACCOUNT_ROUTES } from '@/routing/account'
import { ROOT_ROUTES } from '@/routing/root'
import { NFTAbiInfo, NFTAbiJson, nftAbiService } from '@/services/NftAbiService'
import { useStores } from '@/stores'
import { NftsList } from '@/component/NftsList/NftsList'
import { useAsyncEffect } from '@/hooks/useAsyncEffect'
import { ItemInterface } from '@/util/nft-interface'
import { NftBody } from './NftBody'
import { CollectionBody } from './CollectionBody'

const BASIC_NFT_TYPE = 'Basic NFT'

export const AccountPage = () => {
  const params = useParams<typeof ACCOUNT_ROUTES.accountPage.params>()
  const accountAdr = params.accountId

  const [intf, setIntf] = useState<ItemInterface | null | undefined>(undefined)

  const [searchItemIntf] = useFindSupportedInterface()

  useAsyncEffect(async () => {
    if (!accountAdr) return
    setIntf(undefined)

    const intf = await searchItemIntf(accountAdr)
    console.log(intf)

    if (!intf || intf === 'unsupported') {
      setIntf(null)
      return
    }
    setIntf(intf)
  }, [accountAdr])

  function body() {
    if (!accountAdr) return
    if (intf === undefined) return <span>retriving interface</span>
    if (intf === null) return <span>interface unsupported :((</span>

    return (
      <div>
        <ul>
          <li>
            Interface
            <ul>
              <li>Code {intf.code}</li>
              <li>Standart {intf.standart}</li>
              <li>Type {intf.type}</li>
            </ul>
          </li>
        </ul>
        {intf.type === 'nft' && <NftBody address={accountAdr} />}
        {intf.type === 'collection' && <CollectionBody address={accountAdr} />}
      </div>
    )
  }

  return (
    <div>
      <h1>Account page</h1>
      {body()}
    </div>
  )
}

import { Input } from '@/component/Input'
import { useFindSupportedInterface } from '@/hooks/useFindSupportedInterface'
import { userRpcClient } from '@/hooks/useRpsClient'
import { observer } from 'mobx-react-lite'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { ACCOUNT_ROUTES } from '@/routing/account'
import { ROOT_ROUTES } from '@/routing/root'
import { NFTAbiInfo, NFTAbiJson, nftAbiService } from '@/services/NftAbiService'
import { useStores } from '@/stores'
import { UnpromiseFunc } from '@/util/promise'
import { ItemsList } from '@/component/ItemsList'

const BASIC_NFT_TYPE = 'Basic NFT'

export const AccountPage = observer(() => {
  const { walletStore } = useStores()
  const navigate = useNavigate()
  const params = useParams<typeof ACCOUNT_ROUTES.accountPage.params>()

  const [itemAdr, setItemAdr] = useState('')
  const [itemJson, setItemJson] = useState<NFTAbiJson | null>(null)
  const [itemInfo, setItemInfo] = useState<NFTAbiInfo | null>(null)

  const [searchItemIntf, isLoadingItemIntf, itemIntf, clearItemIntf] =
    useFindSupportedInterface()

  const prettyItemJson = useMemo(() => JSON.stringify(itemJson || '', null, 2), [itemJson])

  const isItemIsBasicNFT = itemJson?.type === BASIC_NFT_TYPE
  const itemPreviewImageURL = isItemIsBasicNFT ? itemJson.preview.source : null

  useEffect(() => {
    if (walletStore.$isPermited === true) return
    navigate(ROOT_ROUTES.rootPage.route)
  }, [navigate, walletStore.$isPermited])

  const handleTestInterface = async () => {
    setItemJson(null)
    clearItemIntf()
    setItemInfo(null)

    const intf = await searchItemIntf(itemAdr)
    console.log(intf)

    if (intf === 'unsupported') return
    // checking is NFT 4.3 standard
    if (intf?.standart !== 4.3) return
    if (intf?.type !== 'nft') return

    const json = await nftAbiService.getJson(itemAdr)
    setItemJson(json)

    const info = await nftAbiService.getInfo(itemAdr)
    setItemInfo(info)
    console.log(info)
  }

  return (
    <div>
      <h1>Account page</h1>
      <ul>
        <li>Account address (from url): {params.accountId}</li>
        <li>
          <Input
            style={{ width: '500px' }}
            value={itemAdr}
            onChange={setItemAdr}
            placeholder="item addres goes here"
          />
          <button onClick={handleTestInterface}>Test supported interface</button>
        </li>

        <li>
          Item test result:
          {!isLoadingItemIntf && !itemIntf && 'no data'}
          {isLoadingItemIntf && 'loading item interface'}
          {!isLoadingItemIntf && itemIntf && (
            <ul>
              <li>TIP Standard: {itemIntf.standart}</li>
              <li>Interface type: {itemIntf.type}</li>
              <li>Interface code: {`0x${itemIntf.code.toString(16)}`}</li>
              <li>Item manager: {String(itemInfo?.manager) || 'no info'}</li>
              <li>Item owner: {String(itemInfo?.owner) || 'no info'}</li>
              <li>Item collection: {String(itemInfo?.collection) || 'no info'}</li>
              <li>
                Item json:
                <pre>{prettyItemJson}</pre>
              </li>
              <li>
                Item url:
                <a href={itemJson?.external_url} target="_blank" rel="noreferrer">
                  {itemJson?.external_url}
                </a>
              </li>
              <li>
                Item image:
                <br />
                {isItemIsBasicNFT ? (
                  <img
                    style={{ imageRendering: 'pixelated' }}
                    src={itemPreviewImageURL || ''}
                    width="100px"
                    alt=""
                  />
                ) : (
                  'no image, cuz this is not Basic nft'
                )}
              </li>
            </ul>
          )}
        </li>
      </ul>
      {itemIntf?.type === 'collection' && <ItemsList itemAdr={itemAdr} />}
    </div>
  )
})

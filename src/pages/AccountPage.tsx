import { COLLECTION_ABI } from 'abis/Collection.abi'
import { INDEX_ABI } from 'abis/Index.abi'
import { INDEX_BASIS_ABI } from 'abis/IndexBasis.abi'
import { Input } from 'component/Input'
import { Address } from 'everscale-inpage-provider'
import { useFindSupportedInterface } from 'hooks/useFindSupportedInterface'
import { userRpcClient } from 'hooks/useRpsClient'
import { observer } from 'mobx-react-lite'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { ACCOUNT_ROUTES } from 'routing/account'
import { ROOT_ROUTES } from 'routing/root'
import { nftAbiService } from 'services/NftAbiService'
import { useStores } from 'stores'
import { UnpromiseFunc } from 'util/promise'

const BASIC_NFT_TYPE = 'Basic NFT'

export const AccountPage = observer(() => {
  const { walletStore } = useStores()
  const params = useParams<typeof ACCOUNT_ROUTES.accountPage.params>()
  const navigate = useNavigate()

  const [itemAdr, setItemAdr] = useState('')
  const [itemJson, setItemJson] = useState<Record<string, any> | null>(null)
  const [itemInfo, setItemInfo] = useState<UnpromiseFunc<typeof nftAbiService.getInfo> | null>(
    null
  )

  const [searchItemIntf, loadingItemIntf, itemIntf, clearItemIntf] =
    useFindSupportedInterface()

  const prettyItemJson = useMemo(
    () => (itemJson ? JSON.stringify(itemJson, null, 2) : ''),
    [itemJson]
  )

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
    if (intf?.standart !== 4.3) return
    if (intf?.type !== 'nft') return

    const json = await nftAbiService.getJson(itemAdr)
    setItemJson(JSON.parse(json))

    const info = await nftAbiService.getInfo(itemAdr)
    setItemInfo(info)
    console.log(info)
  }

  const rpc = userRpcClient()

  //test
  useEffect(() => {
    if (!itemAdr) return
    ;(async () => {
      const collCtc = new rpc.Contract(COLLECTION_ABI, new Address(itemAdr))

      // 72054128800...
      const { codeHash } = await collCtc.methods
        .nftCodeHash({ answerId: 0 })
        .call({ responsible: true })
      const hexCodeHash = BigInt(codeHash).toString(16)

      console.log('code hash', codeHash)
      console.log('code hash HEX', hexCodeHash)

      // te6ccgECVgEAD4QAAgaK2zVVAQQkiu1TIOMDIMD/4w...
      const { code } = await collCtc.methods
        .nftCode({ answerId: 0 })
        .call({ responsible: true })
      console.log(code)

      const nftAdr = await collCtc.methods
        .nftAddress({ answerId: 0, id: codeHash })
        .call({ responsible: true })
      console.log(nftAdr)

      // const { accounts, continuation } = await rpc.getAccountsByCodeHash({
      //   codeHash: itemAdr,
      // })
      // console.log(accounts, continuation)

      const resp = await fetch('/api-everscan/accounts/list', {
        method: 'POST',
        body: JSON.stringify({
          codeHash: hexCodeHash,
          limit: 1,
          offset: 0,
        }),
      })
      console.log(await resp.text())
    })()
  }, [itemAdr, rpc])

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
          {!loadingItemIntf && !itemIntf && 'no data'}
          {loadingItemIntf && 'loading item interface'}
          {!loadingItemIntf && itemIntf && (
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
                    src={itemPreviewImageURL}
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
    </div>
  )
})

import { useAsyncEffect } from '@/hooks/useAsyncEffect'
import { ACCOUNT_ROUTES } from '@/routing/account'
import { NFTAbiInfo, NFTAbiJson, nftAbiService } from '@/services/NftAbiService'
import { useMemo, useState } from 'react'
import { generatePath, Link } from 'react-router-dom'

type NftBodyProps = {
  address: string
}
export const NftBody = ({ address }: NftBodyProps) => {
  const [info, setInfo] = useState<NFTAbiInfo | null | undefined>(undefined)
  const [json, setJson] = useState<NFTAbiJson | null | undefined>(null)

  useAsyncEffect(async () => {
    setInfo(undefined)
    setJson(undefined)

    const json = await nftAbiService.getJson(address)
    setJson(json)

    const info = await nftAbiService.getInfo(address)
    setInfo(info)

    // debug info
    console.log('Json', json)
    console.log('Info', info)
  }, [address])

  const { collectionRoute, ownerRoute } = useMemo(() => {
    if (!info) return {}

    const collectionRoute = generatePath(ACCOUNT_ROUTES.accountPage.route, {
      [ACCOUNT_ROUTES.accountPage.params.accountId]: String(info.collection),
    })

    const ownerRoute = generatePath(ACCOUNT_ROUTES.accountPage.route, {
      [ACCOUNT_ROUTES.accountPage.params.accountId]: String(info.owner),
    })

    return { collectionRoute, ownerRoute }
  }, [info])

  return (
    <div>
      <h2>Nft body</h2>
      <img src={json?.preview.source} width="100px" style={{ imageRendering: 'pixelated' }} />
      <ul>
        <li>{json?.name}</li>
        <li>{json?.type}</li>
        <li>Address {address}</li>
        <li>
          From collection <Link to={collectionRoute || ''}>{String(info?.collection)}</Link>
        </li>
        <li>
          Owner <Link to={ownerRoute || ''}>{String(info?.owner)}</Link>
        </li>
      </ul>
    </div>
  )
}

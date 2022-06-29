import { everscanApiService } from '@/services/EverscanApiService'
import { useAsyncEffect } from '@/hooks/useAsyncEffect'
import { useAsyncMemo } from '@/hooks/useAsyncMemo'
import { collectionAbiService } from '@/services/CollectionAbiService'
import { NFTAbiJson, nftAbiService } from '@/services/NftAbiService'
import { makeAddress } from '@/util/address'
import { toHex } from '@/util/number'
import { countToPagesCount, pageToOffset } from '@/util/paging'
import { useState } from 'react'
import { generatePath, Link } from 'react-router-dom'
import { ACCOUNT_ROUTES } from '@/routing/account'
import { Pagination } from '@/component/Pagination'
import { NftsListItem } from './NftsListItem'

const PAGE_SIZE = 30

type NftJsonWithAddress = NFTAbiJson & { address: string }

async function loadPage(hexCodeHash: string, page: number) {
  return everscanApiService.fetchAccountsList({
    codeHash: hexCodeHash,
    limit: PAGE_SIZE,
    offset: pageToOffset(page, PAGE_SIZE),
  })
}

type ItemsListProps = {
  collectionAdr: string
}
export const NftsList = ({ collectionAdr }: ItemsListProps) => {
  const [page, setPage] = useState(0)
  const [nftsJsons, setNftsJsons] = useState<NftJsonWithAddress[]>([])
  const [isLoading, setLoading] = useState(false)

  const [hexCodeHash = ''] = useAsyncMemo(
    async () => toHex(await collectionAbiService.getCodeHash(collectionAdr)),
    [collectionAdr]
  )

  const [itemsCount = 0] = useAsyncMemo(async () => {
    if (!hexCodeHash) return
    const { count } = await everscanApiService.fetchAccountsCount({ codeHash: hexCodeHash })
    return count
  }, [hexCodeHash])

  useAsyncEffect(async () => {
    if (!hexCodeHash) return

    setLoading(true)

    const list = (await loadPage(hexCodeHash, page)) || []

    const jsons = await Promise.all(
      list.map((item) => nftAbiService.getJson(makeAddress(item.address)))
    )

    const enrichedJsons: NftJsonWithAddress[] = jsons.map((json, index) => ({
      ...json,
      address: list[index].address,
    }))

    setNftsJsons(enrichedJsons)

    setLoading(false)
  }, [hexCodeHash, page])

  return (
    <div>
      <Pagination
        page={page}
        maxPages={countToPagesCount(itemsCount, PAGE_SIZE)}
        onChange={setPage}
      />

      {isLoading
        ? 'loading ...'
        : nftsJsons.map((json) => (
            <NftsListItem
              key={json.address}
              address={json.address}
              src={json.preview.source}
            />
          ))}
    </div>
  )
}

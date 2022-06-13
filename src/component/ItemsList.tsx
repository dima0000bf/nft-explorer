import { everscanApiService } from '@/services/EverscanApiService'
import { useAsyncEffect } from '@/hooks/useAsyncEffect'
import { useAsyncMemo } from '@/hooks/useAsyncMemo'
import { collectionAbiService } from '@/services/CollectionAbiService'
import { NFTAbiJson, nftAbiService } from '@/services/NftAbiService'
import { makeAddress } from '@/util/address'
import { toHex } from '@/util/number'
import { countToPagesCount, pageToOffset } from '@/util/paging'
import { useState } from 'react'
import { Pagination } from './Pagination'

const PAGE_SIZE = 10

async function loadPage(hexCodeHash: string, page: number) {
  const list = await everscanApiService.fetchAccountsList({
    codeHash: hexCodeHash,
    limit: PAGE_SIZE,
    offset: pageToOffset(page, PAGE_SIZE),
  })

  return list
}

type ItemsListProps = {
  itemAdr: string
}
export const ItemsList = ({ itemAdr }: ItemsListProps) => {
  const [page, setPage] = useState(0)
  const [jsons, setJsons] = useState<NFTAbiJson[]>([])
  const [isLoading, setLoading] = useState(false)

  const [hexCodeHash = ''] = useAsyncMemo(
    async () => toHex(await collectionAbiService.getCodeHash(itemAdr)),
    [itemAdr]
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
    setJsons(jsons)

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
        : jsons.map((json) => (
            <img
              key={json.preview.source}
              style={{ imageRendering: 'pixelated' }}
              src={json.preview.source}
              width="100px"
              alt=""
            />
          ))}
    </div>
  )
}

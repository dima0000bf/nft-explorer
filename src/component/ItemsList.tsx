import { COLLECTION_ABI } from '@/abis/Collection.abi'
import { everscanApiService } from '@/api/everscan/EverscanApiService'
import { userRpcClient } from '@/hooks/useRpsClient'
import { nftAbiService } from '@/services/NftAbiService'
import { countToPagesCount, pageToOffset } from '@/util/paging'
import { Address, ProviderRpcClient } from 'everscale-inpage-provider'
import { useEffect, useState } from 'react'
import { Pagination } from './Pagination'

const PAGE_SIZE = 10

async function getCodeHash(rpc: ProviderRpcClient, itemAdr: string) {
  const collCtc = new rpc.Contract(COLLECTION_ABI, new Address(itemAdr))

  // 72054128800...
  const { codeHash } = await collCtc.methods
    .nftCodeHash({ answerId: 0 })
    .call({ responsible: true })
  return codeHash
}

async function loadList(hexCodeHash: string, newPage: number) {
  if (!hexCodeHash) return

  const list = await everscanApiService.fetchAccountsList({
    codeHash: hexCodeHash,
    limit: PAGE_SIZE,
    offset: pageToOffset(newPage, PAGE_SIZE),
  })

  return list
}

type ItemsListProps = {
  itemAdr: string
}
export const ItemsList = ({ itemAdr }: ItemsListProps) => {
  const [page, setPage] = useState(0)
  const [hexCodeHash, setHexCodeHash] = useState('')
  const [jsons, setJsons] = useState<Record<string, any>[]>([])
  const [isLoading, setLoading] = useState(false)
  const [itemsCount, setItemsCount] = useState(0)

  const rpc = userRpcClient()

  useEffect(() => {
    ;(async () => {
      const hexCodeHash = BigInt(await getCodeHash(rpc, itemAdr)).toString(16)
      setHexCodeHash(hexCodeHash)
    })()
  }, [itemAdr, rpc])

  useEffect(() => {
    if (!hexCodeHash) return
    ;(async () => {
      const { count } = await everscanApiService.fetchAccountsCount({ codeHash: hexCodeHash })
      setItemsCount(count)
    })()
  }, [hexCodeHash])

  useEffect(() => {
    if (!hexCodeHash) return
    ;(async () => {
      setLoading(true)

      const list = (await loadList(hexCodeHash, page)) || []
      const jsons = await Promise.all(
        list.map((item) => nftAbiService.getJson(`0:${item.address}`))
      )
      setJsons(jsons.map((json) => JSON.parse(json)))

      setLoading(false)
    })()
  }, [loadList, hexCodeHash, page])

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

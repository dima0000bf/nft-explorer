import { NftsList } from '@/component/NftsList/NftsList'

type CollectionBody = {
  address: string
}
export const CollectionBody = ({ address }: CollectionBody) => {
  return (
    <div>
      <h2>Collection body</h2>

      <NftsList collectionAdr={address} />
    </div>
  )
}

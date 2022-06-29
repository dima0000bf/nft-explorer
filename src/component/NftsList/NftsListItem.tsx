import { ACCOUNT_ROUTES } from '@/routing/account'
import { makeAddress } from '@/util/address'
import { useMemo } from 'react'
import { generatePath, Link } from 'react-router-dom'

type NftsListItemProps = {
  address: string
  src: string
}
export const NftsListItem = ({ address, src }: NftsListItemProps) => {
  const path = useMemo(
    () =>
      generatePath(ACCOUNT_ROUTES.accountPage.route, {
        [ACCOUNT_ROUTES.accountPage.params.accountId]: makeAddress(address),
      }),
    [address]
  )

  return (
    <Link to={path}>
      <img style={{ imageRendering: 'pixelated' }} src={src} width="100px" alt="" />
    </Link>
  )
}

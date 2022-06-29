import { observer } from 'mobx-react-lite'
import { generatePath, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { ACCOUNT_ROUTES } from '@/routing/account'
import { useStores } from '@/stores'
import { useAsyncEffect } from '@/hooks/useAsyncEffect'
import { ROOT_ROUTES } from '@/routing/root'
import { Input } from '@/component/Input'
import { useEffect, useState } from 'react'

// EXAMPLES
const EXAMPLE_COLLECTION = '0:0cd35b77b73df2ce86288cb8530cb6328363543f04da81687e43b3d5628c0bda'
const EXAMPLE_COLLECTION_ROUTE = generatePath(ACCOUNT_ROUTES.accountPage.route, {
  [ACCOUNT_ROUTES.accountPage.params.accountId]: EXAMPLE_COLLECTION,
})

const EXAMPLE_NFT = '0:b20b38f46a839726f1dbf07deee0ee5d1b9eec86eeacede818157f6af14feef0'
const EXAMPLE_NFT_ROUTE = generatePath(ACCOUNT_ROUTES.accountPage.route, {
  [ACCOUNT_ROUTES.accountPage.params.accountId]: EXAMPLE_NFT,
})

export const RootPage = observer(() => {
  const { walletStore } = useStores()
  const navigate = useNavigate()

  const [customAdr, setCustomAdr] = useState('')

  useAsyncEffect(async () => {
    await walletStore.checkExtension()
    await walletStore.checkIsPermitted()
  }, [walletStore])

  const accountAdr = walletStore.$account?.address
    ? String(walletStore.$account?.address)
    : null

  const onRequestPermission = async () => {
    await walletStore.requestPermissions()
  }
  const onCancelPermission = async () => {
    await walletStore.cancelPermission()
  }
  const onGoCustomAdr = () => {
    if (!customAdr) return

    navigate(
      generatePath(ACCOUNT_ROUTES.accountPage.route, {
        [ACCOUNT_ROUTES.accountPage.params.accountId]: customAdr,
      })
    )
  }

  return (
    <div>
      <h1>
        <Link to={ROOT_ROUTES.rootPage.route}>Root page</Link>
      </h1>
      <ul>
        <li>
          <span>Has extenstion: {String(walletStore.$hasExtension)}</span>
        </li>

        <li>
          <button onClick={onRequestPermission}>Request perm</button>
          <button onClick={onCancelPermission}>Cancel perm</button>
          <span>is permitted: {String(walletStore.$isPermited)}</span>
        </li>

        <li>
          Your account:
          {accountAdr ? (
            <Link
              to={generatePath(ACCOUNT_ROUTES.accountPage.route, {
                [ACCOUNT_ROUTES.accountPage.params.accountId]: accountAdr,
              })}
            >
              {accountAdr}
            </Link>
          ) : (
            '???'
          )}
        </li>

        {walletStore.$isPermited && (
          <li>
            <div>example collection</div>
            <Link to={EXAMPLE_COLLECTION_ROUTE}>{EXAMPLE_COLLECTION}</Link>

            <div>example nft</div>
            <Link to={EXAMPLE_NFT_ROUTE}>{EXAMPLE_NFT}</Link>

            <br />
            <Input
              placeholder="or use this field instead"
              onChange={setCustomAdr}
              value={customAdr}
            />
            <button onClick={onGoCustomAdr}>Go !</button>
          </li>
        )}
      </ul>
    </div>
  )
})

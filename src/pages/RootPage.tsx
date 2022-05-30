import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { generatePath } from 'react-router'
import { Link } from 'react-router-dom'
import { ACCOUNT_ROUTES } from 'routing/account'
import { useStores } from 'stores'

export const RootPage = observer(() => {
  const { walletStore } = useStores()

  useEffect(() => {
    ;(async () => {
      await walletStore.checkExtension()
      await walletStore.checkIsPermitted()
    })()
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

  return (
    <div>
      <h1>Root page</h1>
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
          Account:
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
      </ul>
    </div>
  )
})

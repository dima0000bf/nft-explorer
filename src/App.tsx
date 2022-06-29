import { AccountPage } from '@/pages/AccountPage/AccountPage'
import { RootPage } from '@/pages/RootPage'
import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { ACCOUNT_ROUTES } from '@/routing/account'
import { ROOT_ROUTES } from '@/routing/root'
import { useStores } from './stores'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

export const App = observer(() => {
  const { walletStore } = useStores()
  const { accountId } = useParams<typeof ACCOUNT_ROUTES.accountPage.params>()
  const navigate = useNavigate()

  return (
    <div>
      <Routes>
        <Route path={ROOT_ROUTES.rootPage.route} element={<RootPage />} />
        <Route
          path={ACCOUNT_ROUTES.accountPage.route}
          element={
            <>
              <RootPage />
              {walletStore.$isRpcInitialized && <AccountPage />}
            </>
          }
        />
      </Routes>
    </div>
  )
})

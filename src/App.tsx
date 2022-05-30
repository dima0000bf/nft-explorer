import { AccountPage } from '@/pages/AccountPage'
import { RootPage } from '@/pages/RootPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ACCOUNT_ROUTES } from '@/routing/account'
import { ROOT_ROUTES } from '@/routing/root'

export function App() {
  return (
    <div>
      <div>example collection</div>
      <div>0:0cd35b77b73df2ce86288cb8530cb6328363543f04da81687e43b3d5628c0bda</div>

      <div>example nft</div>
      <div>0:b20b38f46a839726f1dbf07deee0ee5d1b9eec86eeacede818157f6af14feef0</div>

      <BrowserRouter>
        <Routes>
          <Route path={ROOT_ROUTES.rootPage.route} element={<RootPage />} />
          <Route
            path={ACCOUNT_ROUTES.accountPage.route}
            element={
              <>
                <RootPage />
                <AccountPage />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

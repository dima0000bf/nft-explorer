const ACCOUNT_ID_PARAM = 'accountId'

export const ACCOUNT_ROUTES = {
  accountPage: {
    route: `/account/:${ACCOUNT_ID_PARAM}`,
    params: {
      [ACCOUNT_ID_PARAM]: ACCOUNT_ID_PARAM,
    },
  },
}

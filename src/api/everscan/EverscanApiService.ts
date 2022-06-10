import axios, { AxiosError } from 'axios'
import { AccountResponse } from './models/AccountResponse'
import { AccountsCountRequest } from './models/AccountsCountRequest'
import { AccountsRequest } from './models/AccountsRequest'
import { CountResponse } from './models/CountResponse'

class EverscanApiService {
  /** @throws */
  public async fetchAccountsList(data: AccountsRequest) {
    const response = await axios.post<AccountResponse[]>(
      'https://api.everscan.io/v1/accounts/list',
      data
    )

    return response.data
  }

  /** @throws */
  public async fetchAccountsCount(data: AccountsCountRequest) {
    const response = await axios.post<CountResponse>(
      'https://api.everscan.io/v1/accounts/count',
      data
    )

    return response.data
  }
}

export const everscanApiService = new EverscanApiService()

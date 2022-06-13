import axios from 'axios'
import { AccountResponse } from '../api/everscan/models/AccountResponse'
import { AccountsCountRequest } from '../api/everscan/models/AccountsCountRequest'
import { AccountsRequest } from '../api/everscan/models/AccountsRequest'
import { CountResponse } from '../api/everscan/models/CountResponse'

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

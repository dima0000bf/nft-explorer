/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';
import type { TransactionsOrdering } from './TransactionsOrdering';
import type { TransactionType } from './TransactionType';

/**
 * Transactions request
 */
export type TransactionsRequest = {
    balanceChangeGe?: string;
    balanceChangeLe?: string;
    block?: string;
    excludeAccounts?: Array<Address> | null;
    includeAccounts?: Array<Address> | null;
    limit: number;
    offset: number;
    ordering?: TransactionsOrdering;
    timeGe?: number | null;
    timeLe?: number | null;
    txTypes?: Array<TransactionType> | null;
    workchain?: number | null;
};


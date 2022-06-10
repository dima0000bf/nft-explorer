/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsOrdering } from './AccountsOrdering';
import type { AccountState } from './AccountState';

/**
 * Accounts request
 */
export type AccountsRequest = {
    accountGt?: string;
    accountLt?: string;
    balanceGe?: string;
    balanceLe?: string;
    codeHash?: string;
    createdAtGe?: number | null;
    createdAtLe?: number | null;
    initCodeHash?: string;
    limit: number;
    offset: number;
    ordering?: AccountsOrdering;
    state?: AccountState;
    updatedAtGe?: number | null;
    updatedAtLe?: number | null;
    workchain?: number | null;
};


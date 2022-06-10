/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountState } from './AccountState';

/**
 * Accounts count request
 */
export type AccountsCountRequest = {
    accountGt?: string;
    accountLt?: string;
    balanceGe?: string;
    balanceLe?: string;
    codeHash?: string;
    createdAtGe?: number | null;
    createdAtLe?: number | null;
    initCodeHash?: string;
    state?: AccountState;
    updatedAtGe?: number | null;
    updatedAtLe?: number | null;
    workchain?: number | null;
};


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountState } from './AccountState';

/**
 * Account response
 */
export type AccountResponse = {
    address: string;
    balance: string;
    codeHash: string | null;
    createdAt: number;
    creatorAddress: string | null;
    creatorWc: number;
    dataHash: string | null;
    initCodeHash: string | null;
    state: AccountState;
    updatedAt: number;
    updatedLt: string;
    workchain: number;
};


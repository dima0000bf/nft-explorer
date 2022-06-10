/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountState } from './AccountState';

/**
 * Account reference
 */
export type AccountReferenceResponse = {
    address: string;
    balance: string;
    state: AccountState;
    workchain: number;
};


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TransactionType } from './TransactionType';

/**
 * Transaction reference
 */
export type TransactionReferenceResponse = {
    accountId: string;
    hash: string;
    time: number;
    txType: TransactionType;
    workchain: number;
};


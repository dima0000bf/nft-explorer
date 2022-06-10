/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TransactionType } from './TransactionType';

/**
 * Transactions Info Response
 */
export type TransactionBriefResponse = {
    aborted: boolean;
    accountId: string;
    balanceChange: string;
    blockHash: string;
    blockSeqno: number;
    blockShard: string;
    exitCode: number | null;
    hash: string;
    lt: string;
    resultCode: number | null;
    time: number;
    txType: TransactionType;
    workchain: number;
};


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MessageWithoutDataResponse } from './MessageWithoutDataResponse';
import type { TransactionAccountStatus } from './TransactionAccountStatus';
import type { TransactionDescription } from './TransactionDescription';

/**
 * Transactions With Messages Response
 */
export type TransactionResponse = {
    aborted: boolean;
    accountId: string;
    balanceChange: string;
    blockHash: string;
    blockSeqno: number;
    blockShard: string;
    description: TransactionDescription;
    destroyed: boolean;
    endStatus: TransactionAccountStatus;
    hash: string;
    inMessage?: MessageWithoutDataResponse;
    lt: string;
    newHash: string;
    oldHash: string;
    origStatus: TransactionAccountStatus;
    outMessages: Array<MessageWithoutDataResponse>;
    prevTransactionHash: string;
    prevTransactionLt: string;
    time: number;
    totalFees: string;
    workchain: number;
};


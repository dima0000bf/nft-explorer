/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MessageType } from './MessageType';

/**
 * Transaction Message Response
 */
export type TransactionMessageResponse = {
    bounce: boolean;
    bounced: boolean;
    dstAddress: string | null;
    dstWorkchain: number;
    indexInTransaction: number;
    isOut: boolean;
    messageHash: string;
    messageType: MessageType;
    messageValue: string;
    methodName: string | null;
    parsedId: number | null;
    parsedType: string | null;
    srcAddress: string | null;
    srcWorkchain: number;
    transactionHash: string;
    transactionTime: number;
};


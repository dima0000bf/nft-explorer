/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MessageType } from './MessageType';

/**
 * Message response
 */
export type MessageWithoutDataResponse = {
    bounce: boolean;
    bounced: boolean;
    createdAt: number;
    createdLt: string;
    dstAddress: string | null;
    dstWorkchain: number;
    fwdFee: string;
    ihrFee: string;
    importFee: string;
    messageHash: string;
    messageType: MessageType;
    messageValue: string;
    srcAddress: string | null;
    srcWorkchain: number;
};


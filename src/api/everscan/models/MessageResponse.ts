/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MessageType } from './MessageType';

/**
 * Message response
 */
export type MessageResponse = {
    body: string | null;
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
    methodName: string | null;
    parsedId: number | null;
    parsedType: string | null;
    srcAddress: string | null;
    srcWorkchain: number;
    stateInit: string | null;
};


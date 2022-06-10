/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MessageType } from './MessageType';

/**
 * Message reference
 */
export type MessageReferenceResponse = {
    createdAt: number;
    dstAddress: string | null;
    dstWorkchain: number;
    messageHash: string;
    messageType: MessageType;
    messageValue: string;
    srcAddress: string | null;
    srcWorkchain: number;
};


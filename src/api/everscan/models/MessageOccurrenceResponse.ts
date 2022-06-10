/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Message occurrence in transaction
 */
export type MessageOccurrenceResponse = {
    indexInTransaction: number;
    isOut: boolean;
    transactionHash: string;
    transactionTime: number;
};


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TransactionMessageResponse } from './TransactionMessageResponse';

/**
 * Block messages response
 */
export type BlockMessagesResponse = {
    inMessages: Array<TransactionMessageResponse>;
    outMessages: Array<TransactionMessageResponse>;
};


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountReferenceResponse } from './AccountReferenceResponse';
import type { BlockBriefResponse } from './BlockBriefResponse';
import type { MessageReferenceResponse } from './MessageReferenceResponse';
import type { TransactionReferenceResponse } from './TransactionReferenceResponse';

/**
 * Message response
 */
export type SearchMatchResponse = {
    /**
     * Message response
     */
    data: (BlockBriefResponse | MessageReferenceResponse | TransactionReferenceResponse | AccountReferenceResponse);
    /**
     * SearchMatchResponse type variant
     */
    kind: SearchMatchResponse.kind;
};

export namespace SearchMatchResponse {

    /**
     * SearchMatchResponse type variant
     */
    export enum kind {
        BLOCK = 'Block',
        MESSAGE = 'Message',
        TRANSACTION = 'Transaction',
        ACCOUNT = 'Account',
    }


}


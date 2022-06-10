/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';
import type { MessagesOrdering } from './MessagesOrdering';
import type { MessageType } from './MessageType';

/**
 * Messages request
 */
export type MessagesRequest = {
    block?: string;
    excludeAccounts?: Array<Address> | null;
    excludeDstAccounts?: Array<Address> | null;
    excludeSrcAccounts?: Array<Address> | null;
    includeAccounts?: Array<Address> | null;
    includeDstAccounts?: Array<Address> | null;
    includeSrcAccounts?: Array<Address> | null;
    limit: number;
    messageTypes?: Array<MessageType> | null;
    messageValueGe?: string;
    messageValueLe?: string;
    offset: number;
    ordering?: MessagesOrdering;
    transactionTimeGe?: number | null;
    transactionTimeLe?: number | null;
};


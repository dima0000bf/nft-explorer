/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';
import type { MessageType } from './MessageType';

/**
 * Messages count request
 */
export type MessagesCountRequest = {
    block?: string;
    excludeAccounts?: Array<Address> | null;
    excludeDstAccounts?: Array<Address> | null;
    excludeSrcAccounts?: Array<Address> | null;
    includeAccounts?: Array<Address> | null;
    includeDstAccounts?: Array<Address> | null;
    includeSrcAccounts?: Array<Address> | null;
    messageTypes?: Array<MessageType> | null;
    messageValueGe?: string;
    messageValueLe?: string;
    transactionTimeGe?: number | null;
    transactionTimeLe?: number | null;
};


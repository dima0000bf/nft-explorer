/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountStatusChange } from './AccountStatusChange';

export type TransactionStoragePhase = {
    statusChange: AccountStatusChange;
    storageFeesCollected: string;
    storageFeesDue: string;
};


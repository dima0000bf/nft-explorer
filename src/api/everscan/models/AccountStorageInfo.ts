/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountStorageUsed } from './AccountStorageUsed';

export type AccountStorageInfo = {
    duePayment: number | null;
    lastPaid: number;
    used: AccountStorageUsed;
};


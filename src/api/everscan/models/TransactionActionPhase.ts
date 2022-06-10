/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountStatusChange } from './AccountStatusChange';
import type { StorageUsedShort } from './StorageUsedShort';

export type TransactionActionPhase = {
    actionListHash: string;
    msgsCreated: number;
    noFunds: boolean;
    resultArg: number | null;
    resultCode: number;
    skippedActions: number;
    specActions: number;
    statusChange: AccountStatusChange;
    success: boolean;
    totActions: number;
    totMsgSize: StorageUsedShort;
    totalActionFees: string;
    totalFwdFees: string;
    valid: boolean;
};


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StorageUsedShort } from './StorageUsedShort';

export type TransactionBouncePhase = ({
    /**
     * TransactionBouncePhase type variant
     */
    kind: TransactionBouncePhase.kind;
} | {
    /**
     * TransactionBouncePhase type variant
     */
    kind: TransactionBouncePhase.kind;
    msgSize: StorageUsedShort;
    reqFwdFees: string;
} | {
    fwdFees: string;
    /**
     * TransactionBouncePhase type variant
     */
    kind: TransactionBouncePhase.kind;
    msgFees: string;
    msgSize: StorageUsedShort;
});

export namespace TransactionBouncePhase {

    /**
     * TransactionBouncePhase type variant
     */
    export enum kind {
        NEGFUNDS = 'Negfunds',
    }


}


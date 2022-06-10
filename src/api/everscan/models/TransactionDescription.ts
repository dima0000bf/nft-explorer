/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TransactionActionPhase } from './TransactionActionPhase';
import type { TransactionBouncePhase } from './TransactionBouncePhase';
import type { TransactionComputePhase } from './TransactionComputePhase';
import type { TransactionCreditPhase } from './TransactionCreditPhase';
import type { TransactionStoragePhase } from './TransactionStoragePhase';
import type { TransactionTickTock } from './TransactionTickTock';

export type TransactionDescription = ({
    aborted: boolean;
    actionPh: TransactionActionPhase;
    bounce?: TransactionBouncePhase;
    computePh: TransactionComputePhase;
    creditFirst: boolean;
    creditPh: TransactionCreditPhase;
    destroyed: boolean;
    storagePh: TransactionStoragePhase;
    /**
     * TransactionDescription type variant
     */
    txType: TransactionDescription.txType;
} | {
    /**
     * TransactionDescription type variant
     */
    txType: TransactionDescription.txType;
} | {
    aborted: boolean;
    actionPh: TransactionActionPhase;
    computePh: TransactionComputePhase;
    destroyed: boolean;
    storagePh: TransactionStoragePhase;
    tt: TransactionTickTock;
    /**
     * TransactionDescription type variant
     */
    txType: TransactionDescription.txType;
});

export namespace TransactionDescription {

    /**
     * TransactionDescription type variant
     */
    export enum txType {
        ORDINARY = 'Ordinary',
    }


}


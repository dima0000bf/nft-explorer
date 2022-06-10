/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputeSkipReason } from './ComputeSkipReason';

export type TransactionComputePhase = ({
    /**
     * TransactionComputePhase type variant
     */
    kind: TransactionComputePhase.kind;
    reason: ComputeSkipReason;
} | {
    accountActivated: boolean;
    exitArg: number | null;
    exitCode: number;
    gasCredit: number | null;
    gasFees: string;
    gasLimit: string;
    gasUsed: string;
    /**
     * TransactionComputePhase type variant
     */
    kind: TransactionComputePhase.kind;
    mode: number;
    msgStateUsed: boolean;
    success: boolean;
    vmFinalStateHash: string;
    vmInitStateHash: string;
    vmSteps: number;
});

export namespace TransactionComputePhase {

    /**
     * TransactionComputePhase type variant
     */
    export enum kind {
        SKIPPED = 'Skipped',
    }


}


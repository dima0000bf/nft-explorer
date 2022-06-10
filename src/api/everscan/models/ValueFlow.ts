/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Block value flow
 */
export type ValueFlow = {
    /**
     * Value exported with external messages
     */
    created?: string;
    /**
     * Value exported with external messages
     */
    exported?: string;
    /**
     * Value exported with external messages
     */
    feesCollected?: string;
    /**
     * Value exported with external messages
     */
    feesImported?: string;
    /**
     * Value from the previous block
     */
    fromPrevBlk?: string;
    /**
     * Value imported with external messages
     */
    imported?: string;
    /**
     * Value exported with external messages
     */
    minted?: string;
    /**
     * Value exported with external messages
     */
    recovered?: string;
    /**
     * Value to the next block
     */
    toNextBlk?: string;
};


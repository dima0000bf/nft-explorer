/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Blocks count request
 */
export type BlocksCountRequest = {
    genUtimeGe?: number | null;
    genUtimeLe?: number | null;
    seqnoGe?: number | null;
    seqnoLe?: number | null;
    shard?: number | null;
    transactionCountGe?: number | null;
    transactionCountLe?: number | null;
    workchain?: number | null;
};


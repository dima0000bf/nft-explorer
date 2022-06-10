/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BlocksOrdering } from './BlocksOrdering';

/**
 * Blocks request
 */
export type BlocksRequest = {
    genUtimeGe?: number | null;
    genUtimeLe?: number | null;
    limit: number;
    offset: number;
    ordering?: BlocksOrdering;
    seqnoGe?: number | null;
    seqnoLe?: number | null;
    shard?: string;
    transactionCountGe?: number | null;
    transactionCountLe?: number | null;
    workchain?: number | null;
};


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FutureSplitMerge } from './FutureSplitMerge';

/**
 * Shard info description
 */
export type ShardDescrInfo = {
    /**
     * Whether this shard is going to merge
     */
    beforeMerge: boolean;
    /**
     * Whether this shard is going to split
     */
    beforeSplit: boolean;
    /**
     * Logical time range upper bound
     */
    endLt: string;
    /**
     * Total fees collected
     */
    feesCollected: string;
    /**
     * File hash of the latest block in this shard
     */
    fileHash: string;
    /**
     * Shard flags
     */
    flags: number;
    /**
     * Funds emission
     */
    fundsCreated: string;
    /**
     * Unix timestamp of the latest block in shard
     */
    genUtime: number;
    /**
     * Minimal referenced masterchain block seqno
     */
    minRefMcSeqno: number;
    /**
     * Next catchain seqno
     */
    nextCatchainSeqno: number;
    /**
     * Yes
     */
    nextValidatorShard: string;
    /**
     * Yes
     */
    nxCcUpdated: boolean;
    /**
     * Registration mc seqno
     */
    regMcSeqno: number;
    /**
     * Root hash of the latest block in this shard
     */
    rootHash: string;
    /**
     * Latest block seqno
     */
    seqNo: number;
    splitMergeAt: FutureSplitMerge;
    /**
     * Logical time range lower bound
     */
    startLt: string;
    /**
     * Whether this shard is ready to merge
     */
    wantMerge: boolean;
    /**
     * Whether this shard is ready to split
     */
    wantSplit: boolean;
};


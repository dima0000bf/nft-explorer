/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BlkPrevInfo } from './BlkPrevInfo';
import type { ExtBlkRef } from './ExtBlkRef';
import type { GlobalVersion } from './GlobalVersion';

/**
 * Block info
 */
export type BlockInfo = {
    /**
     * Is this block after shards merge
     */
    afterMerge?: boolean;
    /**
     * Is this block after splitting the shards
     */
    afterSplit?: boolean;
    /**
     * Is this block before splitting the shards
     */
    beforeSplit?: boolean;
    /**
     * Maximum logical time in block
     */
    endLt: string;
    /**
     * Block flags
     */
    flags: number;
    /**
     * The sequence number of catchain session which generated this block
     */
    genCatchainSeqno: number;
    genSoftware: GlobalVersion;
    /**
     * Short hash of the set of validators that generated this block
     */
    genValidatorListHashShort: number;
    /**
     * Is this block a key block
     */
    keyBlock?: boolean;
    masterRef?: ExtBlkRef;
    /**
     * Minimal references masterchain seqno
     */
    minRefMcSeqno: number;
    /**
     * Previous key block sequence number
     */
    prevKeyBlockSeqno: number;
    prevRef: BlkPrevInfo;
    prevVertRef?: BlkPrevInfo;
    /**
     * Minimal logical time in block
     */
    startLt: string;
    /**
     * Block version
     */
    version?: number;
    /**
     * Vertical sequence number
     */
    vertSeqNo?: number;
    /**
     * Yes
     */
    vertSeqNoIncr?: number;
    /**
     * Will the current shard ever be merged
     */
    wantMerge?: boolean;
    /**
     * Will the current shard ever be split
     */
    wantSplit?: boolean;
};


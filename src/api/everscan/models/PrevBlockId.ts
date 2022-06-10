/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PrevBlockId = ({
    /**
     * PrevBlockId type variant
     */
    kind: PrevBlockId.kind;
    prev1: string;
    prev1Seqno: number;
} | {
    /**
     * PrevBlockId type variant
     */
    kind: PrevBlockId.kind;
    prev1: string;
    prev1Seqno: number;
    prev1Shard: string;
    prev2: string;
    prev2Seqno: number;
    prev2Shard: string;
});

export namespace PrevBlockId {

    /**
     * PrevBlockId type variant
     */
    export enum kind {
        BLOCK = 'Block',
    }


}


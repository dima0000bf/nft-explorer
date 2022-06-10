/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Request entity by hash
 */
export type ExactBlockRequest = ({
    id: string;
    /**
     * ExactBlockRequest type variant
     */
    kind: ExactBlockRequest.kind;
} | {
    /**
     * ExactBlockRequest type variant
     */
    kind: ExactBlockRequest.kind;
    seqno: number;
    shard: string;
    workchain: number;
});

export namespace ExactBlockRequest {

    /**
     * ExactBlockRequest type variant
     */
    export enum kind {
        BY_HASH = 'ByHash',
    }


}


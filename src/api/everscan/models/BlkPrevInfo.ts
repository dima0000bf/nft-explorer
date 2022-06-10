/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExtBlkRef } from './ExtBlkRef';

export type BlkPrevInfo = ({
    /**
     * BlkPrevInfo type variant
     */
    kind: BlkPrevInfo.kind;
    prev: ExtBlkRef;
} | {
    /**
     * BlkPrevInfo type variant
     */
    kind: BlkPrevInfo.kind;
    prev1: ExtBlkRef;
    prev2: ExtBlkRef;
});

export namespace BlkPrevInfo {

    /**
     * BlkPrevInfo type variant
     */
    export enum kind {
        BLOCK = 'Block',
    }


}


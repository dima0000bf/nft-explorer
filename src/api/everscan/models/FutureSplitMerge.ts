/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FutureSplitMerge = ({
    /**
     * FutureSplitMerge type variant
     */
    kind: FutureSplitMerge.kind;
} | {
    interval: number;
    /**
     * FutureSplitMerge type variant
     */
    kind: FutureSplitMerge.kind;
    splitUtime: number;
} | {
    interval: number;
    /**
     * FutureSplitMerge type variant
     */
    kind: FutureSplitMerge.kind;
    mergeUtime: number;
});

export namespace FutureSplitMerge {

    /**
     * FutureSplitMerge type variant
     */
    export enum kind {
        NONE = 'None',
    }


}


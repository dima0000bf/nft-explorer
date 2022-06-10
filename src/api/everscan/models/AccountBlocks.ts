/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AccountBlocks = Array<{
    /**
     * Hash part of account address
     */
    address: string;
    /**
     * New account state hash
     */
    newHash: string;
    /**
     * Old account state hash
     */
    oldHash: string;
    /**
     * Account transaction count
     */
    transactionCount: number;
    /**
     * Account workchain
     */
    wc: number;
}>;

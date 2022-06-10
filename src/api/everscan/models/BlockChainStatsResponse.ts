/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AvgBlockTime } from './AvgBlockTime';

/**
 * Blockhain stats
 */
export type BlockChainStatsResponse = {
    accountsActive1h: number;
    accountsActive24h: number;
    accountsActiveTotal: number;
    accountsCreated1h: number;
    accountsCreated24h: number;
    avgBlockTime: AvgBlockTime;
    circulationSupply: string;
    fetchedAt: number;
    latestMcSeqno: number;
    messages1h: number;
    messages24h: number;
    messagesTotal: number;
    shardchainCount: number;
    totalSupply: string;
    transactionTotal: number;
    transactions1h: number;
    transactions24h: number;
    validatorCount: number;
    volume24h: string;
};


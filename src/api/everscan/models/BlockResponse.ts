/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountBlocks } from './AccountBlocks';
import type { BlockInfo } from './BlockInfo';
import type { PrevBlockId } from './PrevBlockId';
import type { ShardDescrInfoItem } from './ShardDescrInfoItem';
import type { ShardRelations } from './ShardRelations';
import type { ValueFlow } from './ValueFlow';

/**
 * Block response
 */
export type BlockResponse = {
    accountBlocks: AccountBlocks;
    blockInfo: BlockInfo;
    fileHash: string;
    genSoftwareVersion: number;
    genUtime: number;
    isKeyBlock: boolean;
    prev: PrevBlockId;
    prevKeyBlock: number;
    rootHash: string;
    seqno: number;
    shard: string;
    shardRelations: ShardRelations;
    shardsInfo: Array<ShardDescrInfoItem> | null;
    transactionCount: number;
    valueFlow: ValueFlow;
    workchain: number;
};


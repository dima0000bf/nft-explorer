/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ElectionMember } from './ElectionMember';

/**
 * Current election info
 */
export type CurrentElectionData = {
    /**
     * Election start
     */
    electAt: number;
    /**
     * Election end
     */
    electClose: number;
    /**
     * Whether these elections were failed
     */
    failed: boolean;
    /**
     * Whether these elections were finished
     */
    finished: boolean;
    members: Array<ElectionMember>;
    /**
     * Minimal validator stake
     */
    minStake: string;
    /**
     * Total validator stakes
     */
    totalStake: string;
};


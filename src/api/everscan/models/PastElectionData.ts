/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FrozenStake } from './FrozenStake';

/**
 * Past election info
 */
export type PastElectionData = {
    /**
     * Total bonuses received by this validator set
     */
    bonuses: string;
    /**
     * Election ID
     */
    electionId: number;
    frozenDict: Array<FrozenStake>;
    /**
     * Stake freeze duration
     */
    stakeHeld: number;
    /**
     * Total validator stakes
     */
    totalStake: string;
    /**
     * Time of stakes unfreeze
     */
    unfreezeAt: number;
    /**
     * Validator set hash
     */
    vsetHash: string;
};


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CurrentElectionData } from './CurrentElectionData';
import type { PastElectionData } from './PastElectionData';

/**
 * Elector data
 */
export type ElectorDataResponse = {
    /**
     * Active validator set hash
     */
    activeHash: string;
    /**
     * Active election id
     */
    activeId: number;
    currentElection: CurrentElectionData;
    pastElections: Array<PastElectionData>;
};


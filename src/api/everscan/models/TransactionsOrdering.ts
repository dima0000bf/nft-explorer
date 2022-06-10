/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Direction } from './Direction';
import type { TransactionColumn } from './TransactionColumn';

/**
 * Transactions ordering
 */
export type TransactionsOrdering = {
    column: TransactionColumn;
    direction: Direction;
};


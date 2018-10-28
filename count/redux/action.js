import actionCreator from '../../lib/actionCreators';

export const ADD_COUNT = 'ADD_COUNT';
export const REDUCE_COUNT = 'REDUCE_COUNT';
export const RESET_COUNT = 'RESET_COUNT';

export const add = actionCreator(ADD_COUNT, 'num');
export const reduce = actionCreator(REDUCE_COUNT, 'num');
export const reset = actionCreator(RESET_COUNT);

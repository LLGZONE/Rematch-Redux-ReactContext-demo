import createReducer from '../../lib/createReducers';
import * as ActionTypes from './action';

const count = createReducer(
  { count: 0 },
  {
    [ActionTypes.ADD_COUNT](state, action) {
      return {
        count: state.count + 1
      };
    },
    [ActionTypes.REDUCE_COUNT](state, action) {
      return {
        count: state.count - 1
      };
    },
    [ActionTypes.RESET_COUNT](state, action) {
      return {
        count: 0
      };
    }
  }
);

export default count;

export default function createReducers(initialState, handlers) {
  return function(state = initialState, action) {
    console.log(action)
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}

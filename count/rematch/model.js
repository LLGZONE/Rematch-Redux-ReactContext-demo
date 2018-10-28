export const count = {
  state: 0,
  reducers: {
    add(state, payload) {
      return state + payload;
    },
    reduce(state, payload) {
      return state - payload;
    },
    reset() {
      return 0;
    }
  }
};

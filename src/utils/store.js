const state = {};

export function setState(nextState = {}) {
  Object.keys(nextState).forEach(((key) => {
    state[key] = nextState[key];
  }));
}

export function getState() {
  const stateWrap = {};
  Object.assign(stateWrap, state);
  return stateWrap;
}

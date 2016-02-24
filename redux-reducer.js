export function books(state={active: 0, list: LIST}, action) {
  let nextState = state;

  switch (action.type) {
  case ADD:
    nextState = {
      ...state,
      list: [action.payload, ...list]
    };
    break;

  default: break;
  }

  return nextState;
}

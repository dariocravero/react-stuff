import { ADD } from './redux-actions';
import LIST from './list';

export default function books(state={active: 0, list: LIST}, action) {
  let nextState = state;

  switch (action.type) {
  case ADD:
    nextState = {
      ...state,
      list: [...state.list, action.payload]
    };
    break;

  default: break;
  }

  return nextState;
}

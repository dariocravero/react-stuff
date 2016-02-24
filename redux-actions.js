export const ACTIVATE = 'books/ACTIVATE';
export function activate(active) {
  return {
    type: ACTIVATE,
    payload: {
      active
    }
  };
}

export const ADD = 'books/ADD';
export function add({author, text, title}) {
  return {
    type: ADD,
    payload: {
      author,
      text,
      title
    }
  };
}

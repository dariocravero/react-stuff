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

import React, { PropTypes } from 'react';

const Books = ({activate, list}) => (
  <nav>
    {list.map(({title}, i) => <button key={i} onClick={() => activate(i)}>{title}</button>)}
  </nav>
);
Books.propTypes = {
  activate: PropTypes.func,
  list: PropTypes.array.isRequired
}
export default Books;

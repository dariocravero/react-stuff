import React, { PropTypes } from 'react';

const Authors = ({list}) => (
  <div>
    <h2>authors</h2>
    {list.length ?
      list.map((author, i) => <div key={i}>{author}</div>) :
      <div>there are no authors!</div>
    }
  </div>
);
Authors.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Authors;

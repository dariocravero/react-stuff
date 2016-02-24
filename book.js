import React, { PropTypes } from 'react';

const Book = ({author, text}) => (
  <div>
    <p>{text}</p>
    <p>by {author}</p>
  </div>
);
Book.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
export default Book;

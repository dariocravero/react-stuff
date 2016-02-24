import { connect, Provider } from 'react-redux';
import { add } from './redux-actions';
import Add from './add';
import Book from './book';
import Books from './books';
import React, { Component, PropTypes } from 'react';

const App = ({active, dispatch, list}) => (
  <div>
    <h1>books</h1>
    <Books list={list} />
    <Book {...book} />

    <h2>new book</h2>
    <Add add={book => dispatch(add(book))} />
  </div>
);

function mapStateToProps(state, props) {
  return state.books;
}

export default connect(mapStateToProps)(App);

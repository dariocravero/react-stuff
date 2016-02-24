import { connect } from 'react-redux';
import { activate, add } from './redux-actions';
import Add from './add';
import Book from './book';
import Books from './books';
import React from 'react';

const App = ({active, dispatch, list}) => (
  <div>
    <h1>books</h1>
    <Books activate={i => dispatch(activate(i))} list={list} />
    <Book {...list[active]} />

    <h2>new book</h2>
    <Add add={book => dispatch(add(book))} />
  </div>
);

function mapStateToProps(state, props) {
  return state.books;
}

export default connect(mapStateToProps)(App);

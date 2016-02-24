import React, { Component, PropTypes } from 'react';

export default class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false
    };
  }

  onSubmit(event) {
    event.preventDefault();

    const author = this.refs.author.value;
    const text = this.refs.text.value;
    const title = this.refs.title.value;

    if (author && text && title) {
      this.setState({
        error: false
      });
      this.props.add({author, text, title});

      this.refs.author.value = '';
      this.refs.text.value = '';
      this.refs.title.value = '';
    } else {
      this.setState({
        error: true
      });
    }
  }

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={e => this.onSubmit(e)}>
        {error && <div style={{color: 'red'}}>we need all the details!</div>}
        <label>Author <input ref='author' /></label>
        <label>Title <input ref='title' /></label>
        <label>Text <textarea ref='text' /></label>
        <button type='submit'>Add</button>
      </form>
    );
  }
}

Add.propTypes = {
  add: PropTypes.func
};

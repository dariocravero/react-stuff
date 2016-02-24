import { connect } from 'react-redux';
import Authors from './authors';

function mapStateToProps(state, props) {
  return {
    list: state.books.map(book => book.author)
  };
}
export default connect(mapStateToProps)(Authors);

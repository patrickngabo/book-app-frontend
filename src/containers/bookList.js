import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { loadBooksAction } from '../redux/actions/bookActions';
import { getDataThunk } from '../redux/thunks/index';

class BookList extends Component {
  state = {
    book: {
      title: '',
      description: '',
      price: '',
    },
  }

  componentDidMount = async () => {
    await this.props.getDataThunk('get', 'books', loadBooksAction);
    const { title, description, price } = this.props.books;
    this.setState({ title, description, price });
  }

  render() {
    return (
      <div>
        <h2>Books</h2>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price(FRW)</th>
              </tr>
            </thead>
            <tbody>
              {this.props.books.allBooks && this.props.books.allBooks.map((book) => (
                  <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>
                      <Link to={`/createBook/${book.id}`}>{book.title}</Link>
                    </td>
                    <td>{book.description}</td>
                    <td>{book.price}</td>
                  </tr>
              ))}
            </tbody>
          </table>
      </div>
    );
  }
}

BookList.propTypes = {
  getDataThunk: PropTypes.func,
  books: PropTypes.object,
  history: PropTypes.any,
  errors: PropTypes.func,
};
const actionCreator = {
  getDataThunk,
};
const mapStateToProps = (state) => ({
  books: state.books.books,
  errors: state.books.errors,
});

export default connect(mapStateToProps, actionCreator)(BookList);

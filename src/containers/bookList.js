import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { loadBooksAction, deleteBookAction } from '../redux/actions/bookActions';
import { getDataThunk, postDataThunk } from '../redux/thunks/index';

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

  handleDelete = async (id) => {
    await this.props.postDataThunk('delete', `books/${id}`, deleteBookAction, null);
    window.location.reload();
  }

  render() {
    return (
      <div>
        <h2>Books</h2>
        <div><button className="btn btn-primary btn-lg create-button"><Link to={'/createBook'}>New Book</Link></button> </div>
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
                      <Link to={`/updateBook/${book.id}`}>{book.title}</Link>
                    </td>
                    <td>{book.description}</td>
                  <td>{book.price}</td>
                  <td><button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(book.id)}>Delete</button></td>
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
  postDataThunk: PropTypes.func,
  books: PropTypes.object,
  history: PropTypes.any,
  errors: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
const actionCreator = {
  getDataThunk, postDataThunk,
};
const mapStateToProps = (state) => ({
  books: state.books.books,
  errors: state.books.errors,
});

export default connect(mapStateToProps, actionCreator)(BookList);

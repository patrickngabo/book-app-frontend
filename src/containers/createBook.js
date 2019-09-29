import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { toast } from 'react-toastify';
import BookForm from '../components/books/BookForm';
import { createBookAction } from '../redux/actions/bookActions';
import { postDataThunk } from '../redux/thunks/index';

class CreateBook extends Component {
  state = {
    book: {
      title: '',
      description: '',
      price: '',
    },
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.postDataThunk('post', 'books', createBookAction, this.state);
    if (!this.props.books.errors) {
      this.props.history.push('/books');
    }
  }

  render() {
    return (
      <div className="bookform">
        <div className="alert-danger">
        {this.props.books.errors}
        </div>
        <BookForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          book={this.state.book}
          />

      </div>
    );
  }
}
CreateBook.propTypes = {
  books: PropTypes.object,
  postDataThunk: PropTypes.func,
  history: PropTypes.any,
};

const mapStateToProps = (state) => ({
  books: state.books.books,
});
const actionCreator = {
  postDataThunk,
};
export default connect(
  mapStateToProps,
  actionCreator,
)(CreateBook);

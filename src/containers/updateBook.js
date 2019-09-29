import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BookForm from '../components/books/BookForm';
import { updateBookAction, loadBooksAction } from '../redux/actions/bookActions';
import { postDataThunk, getDataThunk } from '../redux/thunks/index';

class UpdateBook extends Component {
  state = {
    book: {
      title: '',
      description: '',
      price: '',
    },
  }


   componentDidMount = async () => {
     const { id } = this.props.match.params;
     await this.props.getDataThunk('get', `books/${id}`, loadBooksAction);
     const { theBook } = this.props.books;
     this.setState({
       title: theBook.title,
       description: theBook.description,
       price: theBook.price,
     });
   }

   // handleChange = (e) => {
   //   this.setState({
   //     ...this.state,
   //     [e.target.name]: e.target.value,
   //   });
   // }

 handleChange = (event) => {
   const book = { ...this.state.book };
   book[event.target.name] = event.target.value;
   this.setState({ book });
 }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    await this.props.postDataThunk('patch', `books/${id}`, updateBookAction, this.state);
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
        <div>
          <p className="update-form">Update Book</p>
        <BookForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          theBook={this.state.theBook}/>
        </div>
      </div>
    );
  }
}
UpdateBook.propTypes = {
  books: PropTypes.object,
  postDataThunk: PropTypes.func,
  getDataThunk: PropTypes.func,
  history: PropTypes.any,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

const mapStateToProps = (state) => ({
  books: state.books.books,
});
const actionCreator = {
  postDataThunk, getDataThunk,
};
export default connect(
  mapStateToProps,
  actionCreator,
)(UpdateBook);

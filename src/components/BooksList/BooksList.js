import React, { Component } from "react";
import BooksListItem from "../BooksListItem/BookListItem";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import { connect } from "react-redux";
import WithBookStoreService from "../hocs/WithBookStoreService";
import { fetchBooks } from "../../store/actions/index";
import { compose } from "../../utils/index";
import Preloader from "../Preloader/Preloader";

class BooksList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
    // const {
    //   bookStoreService,
    //   booksLoaded,
    //   booksRequested,
    //   booksError
    // } = this.props;
    // booksRequested();
    // bookStoreService
    //   .getBooks()
    //   .then(data => booksLoaded(data))
    //   .catch(err => booksError(err));
  }
  render() {
    const { books, isLoading, error } = this.props;
    if (isLoading) return <Preloader />;
    if (error) return <ErrorIndicator />;
    return (
      <ul className="list-group list-group-flush">
        {books.map(book => {
          return (
            <li key={book.id} className="list-group-item">
              <BooksListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books, isLoading, error }) => {
  return { books, isLoading, error };
};

// const mapDispatchToProps = {
//   booksLoaded,
//   booksRequested,
//   booksError
// };
const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookStoreService } = ownProps;
  return {
    fetchBooks: fetchBooks(bookStoreService, dispatch)
  };
};
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ booksLoaded }, dispatch);
// };
export default compose(
  WithBookStoreService,
  connect(mapStateToProps, mapDispatchToProps)
)(BooksList);

// WithBookStoreService(
//   connect(mapStateToProps, mapDispatchToProps)(BooksList)
// );

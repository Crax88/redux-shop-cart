import React, { Component } from "react";
import BooksListItem from "../BooksListItem/BookListItem";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import { connect } from "react-redux";
import WithBookStoreService from "../hocs/WithBookStoreService";
import { fetchBooks } from "../../store/actions/index";
import { compose } from "../../utils/index";
import Preloader from "../Preloader/Preloader";

const BookList = ({ books }) => {
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
};

class BooksListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }
  render() {
    const { books, isLoading, error } = this.props;
    if (isLoading) return <Preloader />;
    if (error) return <ErrorIndicator />;
    return <BookList books={books} />;
  }
}

const mapStateToProps = ({ books, isLoading, error }) => {
  return { books, isLoading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookStoreService } = ownProps;
  return {
    fetchBooks: fetchBooks(bookStoreService, dispatch)
  };
};

export default compose(
  WithBookStoreService,
  connect(mapStateToProps, mapDispatchToProps)
)(BooksListContainer);

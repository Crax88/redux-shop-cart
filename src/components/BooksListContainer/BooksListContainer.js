import React, { Component } from "react";
import BooksListItem from "../BooksListItem/BookListItem";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import Preloader from "../Preloader/Preloader";
import WithBookStoreService from "../hocs/WithBookStoreService";
import { connect } from "react-redux";
import { fetchBooks, bookAddedToCart } from "../../store/actions/index";
import { compose } from "../../utils/index";

const BookList = ({ books, onAddToCart }) => {
  return (
    <ul className="list-group list-group-flush">
      {books.map(book => {
        return (
          <li key={book.id} className="list-group-item">
            <BooksListItem
              book={book}
              onAddToCart={() => onAddToCart(book.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

class BooksListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks(2);
  }
  render() {
    const { books, isLoading, error, onAddToCart } = this.props;
    if (isLoading) return <Preloader />;
    if (error) return <ErrorIndicator />;
    return <BookList books={books} onAddToCart={onAddToCart} />;
  }
}

const mapStateToProps = ({ bookList: { books, isLoading, error } }) => {
  return { books, isLoading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => id => {
  const { bookStoreService } = ownProps;
  return {
    fetchBooks: fetchBooks(bookStoreService, dispatch),
    onAddToCart: id => dispatch(bookAddedToCart(id))
  };
};

export default compose(
  WithBookStoreService,
  connect(mapStateToProps, mapDispatchToProps)
)(BooksListContainer);

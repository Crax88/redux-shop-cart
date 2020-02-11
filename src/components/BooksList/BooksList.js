import React, { Component } from "react";
import BooksListItem from "../BooksListItem/BookListItem";
import { connect } from "react-redux";
import WithBookStoreService from "../hocs/WithBookStoreService";
import { booksLoaded } from "../../store/actions/index";
import { compose } from "../../utils/index";
class BooksList extends Component {
  componentDidMount() {
    const { bookStoreService } = this.props;
    const data = bookStoreService.getBooks();
    this.props.booksLoaded(data);
  }
  render() {
    const { books } = this.props;
    return (
      <ul>
        {books.map(book => {
          return (
            <li key={book.id}>
              <BooksListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books }) => {
  return { books };
};

const mapDispatchToProps = {
  booksLoaded
};
// const mapDispatchToProps = dispatch => {
//   return {
//     booksLoaded: booksList => dispatch(booksLoaded(booksList))
//   };
// };
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

import React, { Component } from "react";
import BooksListItem from "../BooksListItem/BookListItem";

export default class BooksList extends Component {
  render() {
    const { books } = this.props;
    return (
      <ul>
        {books.map(book => {
          return (
            <li>
              <BooksListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

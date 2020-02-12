import {
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS
} from "../actionTypes";

const booksLoaded = booksList => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: booksList
  };
};

const booksRequested = () => {
  return {
    type: FETCH_BOOKS_REQUEST
  };
};

const booksError = error => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error
  };
};

const fetchBooks = (bookStoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookStoreService
    .getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(err => dispatch(booksError(err)));
};
export { fetchBooks };

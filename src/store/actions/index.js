const booksLoaded = booksList => {
  return {
    type: "BOOKS_LOADED",
    payload: booksList
  };
};
const booksRequested = () => {
  return {
    type: "BOOKS_REQUESTED"
  };
};
const booksError = error => {
  return {
    type: "BOOKS_ERROR",
    payload: error
  };
};
export { booksLoaded, booksRequested, booksError };

const booksLoaded = booksList => {
  return {
    type: "BOOKS_LOADED",
    payload: booksList
  };
};

export { booksLoaded };

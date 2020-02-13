import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE
} from "../actionTypes";

export const updateBookList = (state, action) => {
  if (state === undefined) {
    return {
      books: [],
      isLoading: true,
      error: false
    };
  }
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        books: [],
        isLoading: true,
        error: null
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        books: action.payload,
        isLoading: false,
        error: null
      };
    case FETCH_BOOKS_FAILURE:
      return {
        books: [],
        isLoading: false,
        error: action.payload
      };
    default:
      return state.bookList;
  }
};

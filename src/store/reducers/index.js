import {
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_FAILURE,
  BOOK_ADDED_TO_CART,
  ALL_BOOKS_REMOVED_FROM_CART,
  BOOK_REMOVED_FROM_CART
} from "../actionTypes";

const initialState = {
  books: [],
  isLoading: true,
  error: null,
  cartItems: [],
  orderTotal: 0
};

const updateCartItems = (cartItems, item, idx) => {
  if (idx === -1) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (book, item = {}) => {
  const { id = book.id, count = 0, title = book.title, total = 0 } = item;
  return {
    id,
    title,
    count: count + 1,
    total: total + book.price
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        books: [],
        isLoading: true,
        error: null
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
        isLoading: false,
        error: null
      };
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        books: [],
        isLoading: false,
        error: action.payload
      };
    case BOOK_ADDED_TO_CART:
      const bookId = action.payload;
      const book = state.books.find(book => book.id === action.payload);
      const itemIndex = state.cartItems.findIndex(({ id }) => id === bookId);
      const item = state.cartItems[itemIndex];
      const newItem = updateCartItem(book, item);
      console.log(newItem);
      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
      };
    case ALL_BOOKS_REMOVED_FROM_CART:
      // const bookId = action.payload;
      const cartItems = state.cartItems.filter(
        item => item.id !== action.payload
      );
      return {
        ...state,
        cartItems
      };
    default:
      return state;
  }
};

export default reducer;

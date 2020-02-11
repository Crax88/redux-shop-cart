import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/App/App";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import BookStoreService from "./services/bookStore-service";
import { BookStoreServiceProvider } from "./components/BookStoreServiceContext/BookStoreServiceContex";

import store from "./store/store";

const bookStoreService = new BookStoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookStoreServiceProvider value={bookStoreService}>
        <Router>
          <App />
        </Router>
      </BookStoreServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);

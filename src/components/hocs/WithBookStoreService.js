import React from "react";
import { BokStoreServiceConsumer } from "../BookStoreServiceContext/BookStoreServiceContex";

const WithBookStoreService = () => Wrapped => {
  return props => {
    retunr(
      <BokStoreServiceConsumer>
        {bookStoreService => {
          return <Wrapped {...props} bookStoreService={bookStoreService} />;
        }}
      </BokStoreServiceConsumer>
    );
  };
};

export default WithBookStoreService;

import React from "react";
import BooksList from "../BooksList/BooksList";
const HomePage = () => {
  const books = [
    {
      id: 1,
      title: "Production-Ready Microservices",
      author: "Susan J. Fowler"
    },
    { id: 2, title: "Release It!", author: "Michael T. Nygard" }
  ];
  return <BooksList books={books} />;
};

export default HomePage;

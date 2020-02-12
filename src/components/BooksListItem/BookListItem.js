import React from "react";
import "./BooksListItem.css";

const BooksListItem = ({ book }) => {
  const { title, author, price, coverImage } = book;
  return (
    <div className="bookList-item card mb-3 p-2">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img className="img-fluid" src={coverImage} alt="book cover" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <a href="#">
              <h5 className="card-title">{title}</h5>
            </a>
            <p className="card-text h5">{author}</p>
            <p className="card-text h5">${price}</p>
            <button className="btn btn-info">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksListItem;

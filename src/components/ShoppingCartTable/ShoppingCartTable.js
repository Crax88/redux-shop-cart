import React from "react";

const ShoppingCartTable = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Count</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Microservices</td>
            <td>2</td>
            <td>$130</td>
            <td>
              <button className="btn btn-outline-danger btn-sm">
                <i className="fa fa-trash-o"></i>
              </button>
              <button className="btn btn-outline-success btn-sm">
                <i className="fa fa-plus-circle"></i>
              </button>
              <button className="btn btn-outline-warning btn-sm">
                <i className="fa fa-minus-circle"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCartTable;

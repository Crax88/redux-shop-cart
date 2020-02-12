import React from "react";
import { connect } from "react-redux";

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete
}) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Count</th>
            <th scope="col">Sum</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => {
            const { id, name, count, total } = item;
            return (
              <tr key={id}>
                <td>{idx + 1}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                  <button
                    onClick={() => onDelete(id)}
                    className="btn btn-outline-danger btn-sm"
                  >
                    <i className="fa fa-trash-o"></i>
                  </button>
                  <button
                    onClick={() => onIncrease(id)}
                    className="btn btn-outline-success btn-sm"
                  >
                    <i className="fa fa-plus-circle"></i>
                  </button>
                  <button
                    onClick={() => onDecrease(id)}
                    className="btn btn-outline-warning btn-sm"
                  >
                    <i className="fa fa-minus-circle"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="text-right">
        <span className="h6 text-info">Total: ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = () => {
  return {
    onIncrease: id => console.log(`Increase ${id}`),
    onDecrease: id => console.log(`Decrease ${id}`),
    onDelete: id => console.log(`Delete ${id}`)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);

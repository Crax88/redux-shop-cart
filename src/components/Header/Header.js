import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Header.css";

const Header = ({ items, total }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-md bg-transparent">
        <Link to="/" className="navbar-brand">
          <h3 className="text-secondary">Redux Store</h3>
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item text-info">
            <Link to="/cart" className="d-flex align-items-center">
              <i className="cart-icon fa fa-shopping-cart"></i>
              <span>
                {items} items (${total})
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems.length,
    total: orderTotal
  };
};

export default connect(mapStateToProps)(Header);

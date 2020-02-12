import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, CartPage } from "../pages/";
import Header from "../Header/Header";
import ShoppingCartTable from "../ShoppingCartTable/ShoppingCartTable";
const App = () => {
  return (
    <>
      <Header items={5} total={170} />
      <main className="container">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" component={CartPage} />
        </Switch>
        <ShoppingCartTable />
      </main>
    </>
  );
};

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, CartPage } from "../pages/";
const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/cart" component={CartPage} />
    </Switch>
  );
};

export default App;

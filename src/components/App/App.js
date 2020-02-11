import React from "react";
import Preloader from "../Preloader/Preloader";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

const App = () => {
  return (
    <div className="">
      <Preloader />
      <ErrorIndicator />
    </div>
  );
};

export default App;

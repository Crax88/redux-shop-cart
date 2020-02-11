import React from "react";

import "./ErrorIndicator.css";
import icon from "./error-icon.png";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon" />
      <span className="ooops">Oops!</span>
      <span>Something has gone wrong</span>
      <span>(we'll fix it ASAP)</span>
    </div>
  );
};

export default ErrorIndicator;

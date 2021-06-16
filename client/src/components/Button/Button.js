import React from "react";

import "./Button.scss";

const Button = ({ variant, text, handleClick }) => {
  return (
    <button
      data-testid="button"
      className={`btn btn__${variant}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;

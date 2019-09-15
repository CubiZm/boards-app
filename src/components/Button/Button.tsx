import React from "react";
import cn from "classnames";

import "./Button.scss"

interface ButtonProps {
  isTextBtn?: boolean;
  isOutline?: boolean
  textBtn: string;
  disabled?: boolean
}

const Button = (props: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn("button", {
        "button_text": props.isTextBtn,
        "button_outline": props.isOutline
      })}
      disabled={props.disabled}
    >
      {props.textBtn}
    </button>
  );
};

export default Button;

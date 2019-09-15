import React from "react";
import cn from "classnames";

import "./Button.scss";

interface ButtonProps {
  isTextBtn?: boolean;
  isOutline?: boolean;
  textBtn: string;
  disabled?: boolean;
  classname?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        "button",
        {
          button_text: props.isTextBtn,
          button_outline: props.isOutline
        },
        props.classname
      )}
      disabled={props.disabled}
      tabIndex={1}
    >
      {props.textBtn}
    </button>
  );
};

export default Button;

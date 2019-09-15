import React from "react";

import "./Checkbox.scss";

interface Props {
  id: string;
  name: string;
  text: string;
}

const Checkbox = (props: Props) => {
  return (
    <div className="input-toggle">
      <input
        type="checkbox"
        id={props.id}
        name={props.name}
        value="checkbox"
        className="input-toggle__input"
      />
      <label
        htmlFor={props.id}
        className="input-toggle__label input-toggle__label_checkbox"
        tabIndex={1}
      >
        {props.text}
      </label>
    </div>
  );
};

export default Checkbox;

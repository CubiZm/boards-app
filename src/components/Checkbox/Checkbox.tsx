import React, { useRef } from "react";

import "./Checkbox.scss";

interface Props {
  id: string;
  name: string;
  text: string;
}

const Checkbox = (props: Props) => {

  const valueRef = useRef();

  const handlerChanges = (e: any) => {
    console.log(e.target.checked)
    if (!e.target.checked) {
      valueRef.current.classList.add("input-toggle__input_error");
    }
    if (e.target.checked) {
      valueRef.current.classList.remove("input-toggle__input_error");
    }
  };

  return (
    <div className="input-toggle">
      <input
        ref={valueRef}
        type="checkbox"
        id={props.id}
        name={props.name}
        value="checkbox"
        className="input-toggle__input"
        onChange={handlerChanges}
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

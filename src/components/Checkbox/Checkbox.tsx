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
    if (!e.target.checked) {
      valueRef.current.classList.add("input-toggle__input_error");
    }
    if (e.target.checked) {
      valueRef.current.classList.remove("input-toggle__input_error");
    }
  };

  const handlerKeyDown = (e: any) => {
    const isEnter = e.keyCode === 32;
    const isEscOrEnter = e.keyCode === 27 || e.keyCode === 13;
    if (isEnter) {
      valueRef.current.setAttribute("checked", "checked");
    }
    if (isEscOrEnter && valueRef.current.checked) {
      valueRef.current.removeAttribute("checked", "checked");
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
        onKeyDown={handlerKeyDown}
      >
        {props.text}
      </label>
    </div>
  );
};

export default Checkbox;

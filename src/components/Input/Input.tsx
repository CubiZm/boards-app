import React, { useRef } from "react";

import "./Input.scss";

interface Props {
  type?: string;
  defaultValue?: string;
  labelValue?: string;
  id: string;
  placeholder?: string;
  disabled?: boolean;
}

export const Input = (props: Props) => {
  const valueRef = useRef();

  const handlerChanges = (e: any) => {
    if (e.target.value === "") {
      valueRef.current.classList.add("input-box__input_error");
    }
    if (e.target.value !== "") {
      valueRef.current.classList.remove("input-box__input_error");
    }
  };

  return (
    <div className="input-box">
      <input
        ref={valueRef}
        id={props.id}
        type={props.type || "text"}
        className="input-box__input"
        required={true}
        placeholder={props.labelValue || props.placeholder}
        defaultValue={props.defaultValue}
        onChange={handlerChanges}
        disabled={props.disabled}
        tabIndex={1}
      />
      <label htmlFor={props.id} className="input-box__label">
        {props.labelValue}
      </label>
    </div>
  );
};

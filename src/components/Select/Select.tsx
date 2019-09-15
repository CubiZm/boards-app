import React from "react";
import cn from "classnames";

import arrow from "./static/img/arrow.svg";

import "./Select.scss";

interface selectProps {
  selectedTitle?: string;
  data: any;
}

const Select = (props: selectProps) => {
  const renderSelectValue = (data: any, i: number) => {
    return (
      <div key={i + 50} className="select-box__value">
        <input
          key={i + 100}
          className="select-box__input"
          type="radio"
          id={data.id}
          value={data.id}
          name={data.name}
          checked={true}
          onChange={() => console.log("hello")}
        />
        <p key={i + 200} className="select-box__input-text">
          {data.selectValue ? data.selectValue : "Empty text"}
        </p>
      </div>
    );
  };

  const renderSelectList = (data: any, y: number) => {
    return (
      <>
        {data.selectValue && (
          <li key={y + 1000} className={cn("select-box__item", {})}>
            <label key={y + 1000} className="select-box__option" htmlFor={data.id}>
              {data.selectValue}
            </label>
          </li>
        )}
      </>
    );
  };

  return (
    <div className="select-box">
      <div className="select-box__current" tabIndex={1}>
        <span className="select-box__label">{props.selectedTitle}</span>
        {props.data.map(renderSelectValue)}

        <img
          className="select-box__icon"
          src={arrow}
          alt="Arrow Icon"
          aria-hidden="true"
        />
      </div>

      <ul className="select-box__list">{props.data.map(renderSelectList)}</ul>
    </div>
  );
};

export default Select;

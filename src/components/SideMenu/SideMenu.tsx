import React from "react";
import { data } from "./data";

import "./SideMenu.scss";

const SideMenu = () => {
  const renderMenuItem = (data: any , i: number) => {
    return (
      <ul key={i} className="side-menu__list">
        {data.title && (
          <li key={i} className="side-menu__title">
            <img key={i} className="side-menu__icon" src={data.img} alt="icon" />
            {data.title}
          </li>
        )}
        {data.text.map((data: string, y: number) => (
          <li key={y} className="side-menu__item" tabIndex={1}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a key={y} href="#" className="side-menu__link">
              {data}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <aside className="side-menu">
      <nav>{data.map(renderMenuItem)}</nav>
    </aside>
  );
};

export default SideMenu;

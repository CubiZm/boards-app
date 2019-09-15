import React from "react";
import {data} from './data'

import "./SideMenu.scss";

const SideMenu = () => {
  const renderMenuItem = (data: any) => {
    return (
      <nav>
      <ul key={data.id} className="side-menu__list">
        {data.title && (
          <li className="side-menu__title">
            <img className="side-menu__icon" src={data.img} alt="icon" />
            {data.title}
          </li>
        )}
        {data.text.map((data: string) => (
          <li className="side-menu__item" tabIndex={1}>
            <a href="#" className="side-menu__link">
              {data}
            </a>
          </li>
        ))}
      </ul>
      </nav>
    );
  };

  return <aside className="side-menu">{data.map(renderMenuItem)}</aside>;
};

export default SideMenu;

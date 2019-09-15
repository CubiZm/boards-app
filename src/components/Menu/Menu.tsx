import React from "react";

import "./Menu.scss";

const Menu = () => {
  return (
      <ul className="menu">
        <li>
          <a href="#">One</a>
        </li>
        <li>
          <a href="#">Two</a>
          <ul className="dropdown">
            <li>
              <a href="#">Sub-1</a>
            </li>
            <li>
              <a href="#">Sub-2</a>
            </li>
            <li>
              <a href="#">Sub-3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Three</a>
        </li>
      </ul>
  );
};

export default Menu;

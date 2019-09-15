import React from "react";

import "./Menu.scss";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";

const data = [
  {
    id: 1,
    title: "Wrike Team",
    text: [
      "Profile Settings",
      "Team directory",
      "Apps & Integrations",
      "Mobile apps",
      "Help"
    ]
  }
];

const Menu = () => {
  const renderMenuItem = (data: any) => {
    return (
      <>
        {data.title && (
          <li className="menu-box__item menu-box__title">{data.title}</li>
        )}
        {data.text.map((data: string) => (
          <li className="menu-box__item" tabIndex={1}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="menu-box__link">
              {data}
            </a>
          </li>
        ))}
      </>
    );
  };

  return (
    <div className="menu-box">
      <ul className="menu-box__list">
        <li className="menu-box__item menu-box__item-dropdown">
          <div className="menu-box__dropdown" tabIndex={1}>
            <Avatar
              userAvatarImg="http://heyanton.com/_images/userpics/all/49.jpg"
              userName="Jhon"
              classnameAvatarImg="menu-box__avatar"
              userTeam="Wrike Team"
            />
          </div>
          <ul className="menu-box__dropdown-menu">
            {data.map(renderMenuItem)}

            <li className="menu-box__btn-wrap">
              <Button textBtn="Log out" isTextBtn={true}/>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

import React from "react";

import logo from "../../static/img/logo.svg"

const Logo = () => {
  return (
    <div className="logo">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
};

export default Logo;

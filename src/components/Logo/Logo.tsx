import React from "react";

import logo from "../../static/img/logo.svg"

const Logo = () => {
  return (
    <div className="logo">
      <a>
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
};

export default Logo;

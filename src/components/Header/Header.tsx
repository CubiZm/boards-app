import React from "react";
import "./Header.scss";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

const Header = () => {
  return (
    <header className="header">
      <Logo />

      <Menu />
    </header>
  );
};

export default Header;

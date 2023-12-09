import React from "react";
import "./header.css";

import Logo from "../Logo/Logo";
import Nav from "./Nav/Nav";
import Basket from "../Basket/Basket";

const Header = ({ handleClick }) => {
  return (
    <header className="header" id="homeSection">
      <div className="header_item container">
        <Logo />
        <Nav />
        <Basket handleClick={handleClick} />
      </div>
    </header>
  );
};

export default Header;

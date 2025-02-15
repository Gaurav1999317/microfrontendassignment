import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo"><Link className="link" to="/">Host App</Link></h1>
    </header>
  );
};

export default Header;
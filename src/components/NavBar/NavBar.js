import React from "react";
import "./NavBar.css";
import logo from "../../assets/images/cv-logo.png";

const NavBar = () => {
  return (
    <div className="navigation">
      <img className="logo" src={logo} alt="tree logo" />
      <div className="navLinks">
        <p className="navItem">VISION</p>
        <p className="navItem">MISSION</p>
        <p className="navItem">PROGRAMS</p>
        <p className="navItem">CONNECT</p>
        <p className="navItem">PRODUCTS</p>
        <p className="navItem">BLOG</p>
        <button className="donateBtn">DONATE</button>
      </div>
    </div>
  );
};

export default NavBar;

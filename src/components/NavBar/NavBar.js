import React from "react";
import "./NavBar.css";
import logo from "../../assets/images/cv-logo.png";

const NavBar = () => {
  return (
    <div className="navigation">
      <a href="https://caminoverde.org">
        <img className="logo" src={logo} alt="tree logo" />
      </a>
      <div className="navLinks">
        <a href="https://caminoverde.org/vision">
          <p className="navItem">VISION</p>
        </a>
        <div className="dropdown">
          <a href="https://caminoverde.org/mission">
            <p className="navItem">MISSION</p>
          </a>
          <div className="dropdown-content animated animatedFadeInUp fadeInUp">
            <a href="https://caminoverde.org/team">TEAM</a>
            <a href="https://caminoverde.org/where">WHERE WE WORK</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="https://caminoverde.org/programs">
            <p className="navItem">PROGRAMS</p>
          </a>
          <div className="dropdown-content animated animatedFadeInUp fadeInUp">
            <a href="https://caminoverde.org/centers">CENTERS</a>
            <a href="https://caminoverde.org/consultations">CONSULTATIONS</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="https://caminoverde.org/connect1">
            <p className="navItem">CONNECT</p>
          </a>
          <div className="dropdown-content animated animatedFadeInUp fadeInUp">
            <a href="https://caminoverde.org/contact">CONTACT</a>
            <a href="https://caminoverde.org/volunteer">VOLUNTEER</a>
            <a href="https://caminoverde.org/resources">RESOURCES</a>
          </div>
        </div>
        <a href="https://caminoverde.org/products">
          <p className="navItem">PRODUCTS</p>
        </a>
        <a href="https://caminoverde.org/blog">
          <p className="navItem">BLOG</p>
        </a>
        <a href="https://caminoverde.org/donate">
          <button className="donateBtn">DONATE</button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;

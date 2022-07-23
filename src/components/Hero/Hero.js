import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <NavBar />
      <div className="header">
        <p className="heroTitle">Enjoy the trees of Peru</p>
        <p className="heroSubtitle">Scroll down to search for a plant or tree</p>
      </div>
    </div>
  );
};

export default Hero;

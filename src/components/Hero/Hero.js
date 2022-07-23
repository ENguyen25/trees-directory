import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <NavBar />
      <div className="header">
        <h1>Enjoy the trees of Peru</h1>
        <h3>Scroll down to search for a plant or tree</h3>
      </div>
    </div>
  );
};

export default Hero;

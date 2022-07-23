import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import './ImageGallery.css';

import imagesArray from "../assets/images";

const ImageGallery = () => {
  const randomImages = [];

  for (let i = 0; i < 11; i++) {
    randomImages.push(
      imagesArray[Math.floor(Math.random() * imagesArray.length)]
    );
  }

  return (
    <div className="hero">
      <div className="header">
        <h1>Enjoy the trees of Peru</h1>
        <h3>Scroll down to search for a plant or tree</h3>
      </div>
      <Carousel fade variant="dark" className="carousel">
        {randomImages.map((image) => (
          <Carousel.Item>
            <img className="w-100 carouselImage" src={image[2]} alt="First slide" />
            <Carousel.Caption>
              <Link to={`/species/${image[0]}`} className="carouselCaption">
                <h3>{image[1]}</h3>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageGallery;

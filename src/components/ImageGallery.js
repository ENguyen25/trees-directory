import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import imagesArray from "../assets/images";

const ImageGallery = () => {
  const randomImages = [];

  for (let i = 0; i < 11; i++) {
    randomImages.push(
      imagesArray[Math.floor(Math.random() * imagesArray.length)]
    );
  }

  const style = {
    hero: {
      backgroundImage: 'linear-gradient(black, #454545)',
      color: 'white',
      width: '100%',
      height: '80vh',
    },
    header: {
      textAlign: 'center',
    },
    carousel: {
      width: '70vw',
      height: '70vh',
      margin: 'auto'
    },
    carouselImage: {
      height: '70vh',
      objectFit: 'cover'
    },
    carouselCaption: {
      textDecoration: 'none',
      color: 'lightgray'
    }
  };

  return (
    <div style={style.hero}>
      <h1 style={style.header}>Enjoy the trees of Peru</h1>
      <Carousel fade variant="dark" style={style.carousel}>
        {randomImages.map((image) => (
          <Carousel.Item>
            <img style={style.carouselImage} className="w-100" src={image[2]} alt="First slide" />
            <Carousel.Caption>
              <Link to={`/species/${image[0]}`} style={style.carouselCaption}>
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

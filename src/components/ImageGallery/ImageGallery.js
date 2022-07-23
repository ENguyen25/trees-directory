import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./ImageGallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imagesArray from "../../assets/js/images";

const ImageGallery = () => {
  const randomImages = [];

  for (let i = 0; i < 11; i++) {
    randomImages.push(
      imagesArray[Math.floor(Math.random() * imagesArray.length)]
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  return (
    <div className="carouselContainer">
      <Slider {...settings}>
        {randomImages.map((image) => (
          <div className="carouselCard">
            <Link to={`/species/${image[0]}`}>
              <img className="carouselImage" src={image[2]}></img>
              <p className="carouselCaption">{image[1]}</p>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageGallery;

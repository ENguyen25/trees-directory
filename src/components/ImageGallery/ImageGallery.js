import React, { memo } from "react";
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
    className: "slider variable-width",
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

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

export default memo(ImageGallery);

import React from "react";
import imagesArray from "../assets/images";

const ImageGallery = () => {
  const randomImages = [];

  for (let i = 0; i < 11; i++) {
    randomImages.push(imagesArray[Math.floor(Math.random() * imagesArray.length)])
  }

  return (
    <>
      {randomImages.map((image) => (
        <img src={image[2]}></img>
      ))}
    </>
  );
};

export default ImageGallery;

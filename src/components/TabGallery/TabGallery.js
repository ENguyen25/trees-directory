import React, { useState } from "react";
import "../Profile/Profile.css";
import "./TabGallery.css";

const TabGallery = ({ images }) => {
  const [fetchedImages, setFetchedImages] = useState(images);
  const [imageSrc, setImageSrc] = useState(fetchedImages[0]);

  return (
    <div className="imageContainer">
      <div>
        <img className="enlargedImage" src={imageSrc} alt="plant image" />
      </div>
      {fetchedImages.map((image) => (
        <img
          className="tabImage"
          src={image}
          alt="plant image"
          onClick={() => setImageSrc(image)}
        />
      ))}
    </div>
  );
};

export default TabGallery;

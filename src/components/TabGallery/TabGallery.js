import React, { useState } from "react";
import "../Profile/Profile.css";
import "./TabGallery.css";

const TabGallery = ({ images }) => {
  const [fetchedImages, setFetchedImages] = useState(images);
  const [imageSrc, setImageSrc] = useState(fetchedImages[0]);

  return (
    <div className="imageContainer">
      <div className="enlargedImageContainer">
        <img className="enlargedImage" src={imageSrc} alt="plant image" />
      </div>
      <div className="tabImageContainer">
        {fetchedImages.map((image) => (
          <img
            className="tabImage"
            src={image}
            alt="plant image"
            onClick={() => setImageSrc(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default TabGallery;

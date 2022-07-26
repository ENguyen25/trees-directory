import React from "react";
import SearchResults from "../components/SearchResults/SearchResults";
import ImageGallery from "../components/ImageGallery/ImageGallery";

const LandingPage = () => {
  return (
    <div>
      <ImageGallery />
      <SearchResults />
    </div>
  );
};

export default LandingPage;

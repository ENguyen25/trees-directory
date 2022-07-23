import React from "react";
import SearchResults from "../components/SearchResults/SearchResults";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import Hero from "../components/Hero/Hero";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <ImageGallery />
      <SearchResults />
    </div>
  );
};

export default LandingPage;

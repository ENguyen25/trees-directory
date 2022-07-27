import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Airtable from "airtable";
import TabGallery from "../TabGallery/TabGallery";
import "./Profile.css";

const base = new Airtable({ apiKey: "keycVUqNgXbPQmTBb" }).base(
  "apppAm9jBXoifxazs"
);

const Profile = () => {
  const [selectSpecies, setSelectSpecies] = useState(null);
  const [fetchedImages, setFetchedImages] = useState([]);
  const { treeID } = useParams();

  useEffect(() => {
    base("Our Trees").find(treeID, function (err, record) {
      if (err) {
        console.error(err);
        return;
      }
      setSelectSpecies(record);
    });
  }, [treeID]);

  if (selectSpecies === null) {
    return <>Loading...</>;
  }

  if (fetchedImages.length === 0) {
    const fetchImages = () => {
      if (selectSpecies.fields["Image of tree"] !== undefined) {
        selectSpecies.fields["Image of tree"].map((image) => {
          console.log(JSON.stringify(image.thumbnails.large.url));
          setFetchedImages((current) => [
            ...current,
            image.thumbnails.large.url,
          ]);
        });
      }
      if (selectSpecies.fields["Image of Flower"] !== undefined) {
        selectSpecies.fields["Image of Flower"].map((image) => {
          console.log(JSON.stringify(image.thumbnails.large.url));
          setFetchedImages((current) => [
            ...current,
            image.thumbnails.large.url,
          ]);
        });
      }
      if (selectSpecies.fields["Image of fruit"] !== undefined) {
        selectSpecies.fields["Image of fruit"].map((image) => {
          console.log(JSON.stringify(image.thumbnails.large.url));
          setFetchedImages((current) => [
            ...current,
            image.thumbnails.large.url,
          ]);
        });
      }
      if (selectSpecies.fields["Image of Seed"] !== undefined) {
        selectSpecies.fields["Image of Seed"].map((image) => {
          console.log(JSON.stringify(image.thumbnails.large.url));
          setFetchedImages((current) => [
            ...current,
            image.thumbnails.large.url,
          ]);
        });
      }
      if (selectSpecies.fields["Image of Leaf"] !== undefined) {
        selectSpecies.fields["Image of Leaf"].map((image) => {
          console.log(JSON.stringify(image.thumbnails.large.url));
          setFetchedImages((current) => [
            ...current,
            image.thumbnails.large.url,
          ]);
        });
      }
      if (selectSpecies.fields["Illustration"] !== undefined) {
        selectSpecies.fields["Illustration"].map((image) => {
          console.log(JSON.stringify(image.thumbnails.large.url));
          setFetchedImages((current) => [
            ...current,
            image.thumbnails.large.url,
          ]);
        });
      }
    };

    fetchImages();
  }

  return (
    <div className="profilePage">
      <div className="profileContainer">
        {fetchedImages.length > 0 && <TabGallery images={fetchedImages} />}
        {selectSpecies !== null && (
          <div className="profile">
            <h1 className="pageHeader">
              {selectSpecies.fields["Botanical Name"]}
            </h1>
            <div className="plantNames">
              <p className="indent">
                <b>Family Botanical Name </b>
              </p>
              {selectSpecies.fields["Family Botanical Name"]}
            </div>
            <div className="plantNames">
              <p className="indent">
                <b>Common Names </b>
              </p>
              {selectSpecies.fields["Other Known Names"]}
            </div>
            <div className="plantNames">
              <p className="indent">
                <b>Plant or Tree </b>
              </p>
              {selectSpecies.fields["Plant or Tree"]}
            </div>
            <div className="productContainer">
              <p className="indent">
                <b>Products and Uses</b>
              </p>
              <div className="productList">
                {selectSpecies.fields["Products and Uses"] !== undefined
                  ? selectSpecies.fields["Products and Uses"].map((product) => (
                      <p className="productNames">{product}</p>
                    ))
                  : null}
              </div>
            </div>
            <h4>Botanical Description</h4>
            <p className="description">
              {selectSpecies.fields["Tree Profile"]}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

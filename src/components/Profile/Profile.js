import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Airtable from "airtable";
import TabGallery from "../TabGallery/TabGallery";
import NavBar from "../NavBar/NavBar";
import "./Profile.css";

const base = new Airtable({ apiKey: "keydLeTvuj6nDvKeT" }).base(
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
          setFetchedImages((current) => [
            ...current,
            image.thumbnails.large.url,
          ]);
        });
      }
      if (selectSpecies.fields["Image of Flower"] !== undefined) {
        selectSpecies.fields["Image of Flower"].map((image) => {
          setFetchedImages((current) => [
            ...current,
            image.thumbnails.large.url,
          ]);
        });
      }
      if (selectSpecies.fields["Image of fruit"] !== undefined) {
        selectSpecies.fields["Image of fruit"].map((image) => {
          setFetchedImages((current) => [
            ...current,
            image.thumbnails.large.url,
          ]);
        });
      }
      if (selectSpecies.fields["Image of Seed"] !== undefined) {
        selectSpecies.fields["Image of Seed"].map((image) => {
          setFetchedImages((current) => [
            ...current,
            image.thumbnails.large.url,
          ]);
        });
      }
      if (selectSpecies.fields["Image of Leaf"] !== undefined) {
        selectSpecies.fields["Image of Leaf"].map((image) => {
          setFetchedImages((current) => [
            ...current,
            image.thumbnails.large.url,
          ]);
        });
      }
      if (selectSpecies.fields["Illustration"] !== undefined) {
        selectSpecies.fields["Illustration"].map((image) => {
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
    <div className="profileBody">
      <div className="profileHeader">
        <NavBar />
      </div>
      <div className="profilePage">
        <div className="profileContainer">
          <div className="backBtn">
            <a href="/">
              Back to Search
            </a>
          </div>
          <div className="topSection">
            {fetchedImages.length > 0 && <TabGallery images={fetchedImages} />}
            {selectSpecies !== null && (
              <div className="profile">
                <h1 className="pageHeader">
                  {selectSpecies.fields["Botanical Name"]}
                </h1>
                <div className="plantInfo">
                  <p className="label1">
                    <b>Family Botanical Name </b>
                  </p>
                  <p className="info1">
                    {selectSpecies.fields["Family Botanical Name"]}
                  </p>
                  <p className="label2">
                    <b>Common Names </b>
                  </p>
                  <p className="info2">
                    {selectSpecies.fields["Other Known Names"]}
                  </p>
                  <p className="label3">
                    <b>Plant or Tree </b>
                  </p>
                  <p className="info3">
                    {selectSpecies.fields["Plant or Tree"]}
                  </p>
                  {selectSpecies.fields["Products and Uses"] !== undefined ? (
                    <>
                      <p className="label4">
                        <b>Products and Uses</b>
                      </p>
                      <div className="info4">
                        {selectSpecies.fields["Products and Uses"].map(
                          (product) => (
                            <p className="productNames">{product}</p>
                          )
                        )}
                      </div>
                    </>
                  ) : null}
                </div>
                {selectSpecies !== null && (
                  <>
                    {selectSpecies.fields["Tree Profile"] !== undefined ? (
                      <>
                        <h4>Botanical Description</h4>
                        <p className="description">
                          {selectSpecies.fields["Tree Profile"]}
                        </p>
                      </>
                    ) : null}
                  </>
                )}
              </div>
            )}
          </div>
          <div className="bottomSection">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Airtable from "airtable";
import "./Profile.css";

const base = new Airtable({ apiKey: "keycVUqNgXbPQmTBb" }).base(
  "apppAm9jBXoifxazs"
);

const Profile = () => {
  const [selectSpecies, setSelectSpecies] = useState(null);
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

  return (
    <>
      {selectSpecies !== null && (
        <div className="profilePage">
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
          <div className="plantNames">
            <p className="indent">
              <b>Products and Uses</b>
            </p>
            {selectSpecies.fields["Products and Uses"] !== undefined
              ? selectSpecies.fields["Products and Uses"].map((product) => (
                  <p className="productNames">{product}</p>
                ))
              : null}
          </div>
          <h4>Botanical Description</h4>
          <p className="description">{selectSpecies.fields["Tree Profile"]}</p>
          {selectSpecies.fields["Image of tree"] !== undefined
            ? selectSpecies.fields["Image of tree"].map((image) => (
                <img src={image.thumbnails.large.url}></img>
              ))
            : null}
          {selectSpecies.fields["Image of Flower"] !== undefined
            ? selectSpecies.fields["Image of Flower"].map((image) => (
                <img src={image.thumbnails.large.url}></img>
              ))
            : null}
          {selectSpecies.fields["Image of fruit"] !== undefined
            ? selectSpecies.fields["Image of fruit"].map((image) => (
                <img src={image.thumbnails.large.url}></img>
              ))
            : null}
          {selectSpecies.fields["Image of Seed"] !== undefined
            ? selectSpecies.fields["Image of Seed"].map((image) => (
                <img src={image.thumbnails.large.url}></img>
              ))
            : null}
          {selectSpecies.fields["Image of Leaf"] !== undefined
            ? selectSpecies.fields["Image of Leaf"].map((image) => (
                <img src={image.thumbnails.large.url}></img>
              ))
            : null}
          {selectSpecies.fields["Illustration"] !== undefined
            ? selectSpecies.fields["Illustration"].map((image) => (
                <img src={image.thumbnails.large.url}></img>
              ))
            : null}
        </div>
      )}
    </>
  );
};

export default Profile;

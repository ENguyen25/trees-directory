import React, { useState } from "react";
import { Link } from "react-router-dom";
import leaves from "../../assets/images/fronds.jpg";
import "./Trees.css";

const Trees = ({ treeData }) => {
  const [fetchedImages, setFetchedImages] = useState([]);

  // if (treeData) {
  //   const fetchImages = () => {
  //     if (treeData.fields["Image of tree"] !== undefined) {
  //       treeData.fields["Image of tree"].map((image) => {
  //         console.log(JSON.stringify(image.thumbnails.large.url));
  //         setFetchedImages((current) => [
  //           ...current,
  //           image.thumbnails.large.url,
  //         ]);
  //       });
  //     }
  //     if (treeData.fields["Image of Flower"] !== undefined) {
  //       treeData.fields["Image of Flower"].map((image) => {
  //         console.log(JSON.stringify(image.thumbnails.large.url));
  //         setFetchedImages((current) => [
  //           ...current,
  //           image.thumbnails.large.url,
  //         ]);
  //       });
  //     }
  //     if (treeData.fields["Image of fruit"] !== undefined) {
  //       treeData.fields["Image of fruit"].map((image) => {
  //         console.log(JSON.stringify(image.thumbnails.large.url));
  //         setFetchedImages((current) => [
  //           ...current,
  //           image.thumbnails.large.url,
  //         ]);
  //       });
  //     }
  //     if (treeData.fields["Image of Seed"] !== undefined) {
  //       treeData.fields["Image of Seed"].map((image) => {
  //         console.log(JSON.stringify(image.thumbnails.large.url));
  //         setFetchedImages((current) => [
  //           ...current,
  //           image.thumbnails.large.url,
  //         ]);
  //       });
  //     }
  //     if (treeData.fields["Image of Leaf"] !== undefined) {
  //       treeData.fields["Image of Leaf"].map((image) => {
  //         console.log(JSON.stringify(image.thumbnails.large.url));
  //         setFetchedImages((current) => [
  //           ...current,
  //           image.thumbnails.large.url,
  //         ]);
  //       });
  //     }
  //     if (treeData.fields["Illustration"] !== undefined) {
  //       treeData.fields["Illustration"].map((image) => {
  //         console.log(JSON.stringify(image.thumbnails.large.url));
  //         setFetchedImages((current) => [
  //           ...current,
  //           image.thumbnails.large.url,
  //         ]);
  //       });
  //     }
  //   };

  //   fetchImages();
  // }

  return (
    <div className="searchCard">
      <div className="cardImage">
        {treeData.fields["Image of tree"] ? (
          <img
            className="imageSize"
            src={treeData.fields["Image of tree"][0].url}
            alt={treeData.fields["Botanical Name"]}
          />
        ) : (
          <img
            className="imageSize"
            src={leaves}
            alt={treeData.fields["Botanical Name"]}
          />
        )}
      </div>
      <div className="cardContent">
        <Link to={`/species/${treeData.id}`}>
          <h4 className="cardHeader">{treeData.fields["Botanical Name"]}</h4>
        </Link>
        <p className="subtitle">
          <b>Family Botanical Name: </b>
          {treeData.fields["Family Botanical Name"]}
        </p>
        <p className="subtitle">
          <b>Common Names: </b>
          {treeData.fields["Other Known Names"]}
        </p>
        <p className="subtitle">
          <b>Plant or Tree: </b>
          {treeData.fields["Plant or Tree"]}
        </p>
        <p className="productsUses">
          <b>Products and Uses: </b>
        </p>
        {treeData.fields["Products and Uses"] !== undefined
          ? treeData.fields["Products and Uses"].map((product) => (
              <p className="tagLabel">{product} </p>
            ))
          : null}
      </div>
    </div>
  );
};

export default Trees;

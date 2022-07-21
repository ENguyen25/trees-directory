import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Airtable from "airtable";

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
        <>
          <h1>{selectSpecies.fields["Botanical Name"]}</h1>
          <h2>{selectSpecies.fields["Family Botanical Name"]}</h2>
          <h2>{selectSpecies.fields["Other Known Names"]}</h2>
          <p>{selectSpecies.fields["Tree Profile"]}</p>
          <p>{selectSpecies.fields["Plant or Tree"]}</p>
          {selectSpecies.fields["Products and Uses"] !== undefined
            ? selectSpecies.fields["Products and Uses"].map((product) => (
                <p>{product}</p>
              ))
            : null}
          {selectSpecies.fields["Image of tree"] !== undefined
            ? <img src={selectSpecies.fields["Image of tree"][0].thumbnails.large.url}></img>
            : null
          }
          {selectSpecies.fields["Image of Flower"] !== undefined
            ? <img src={selectSpecies.fields["Image of Flower"][0].thumbnails.large.url}></img>
            : null
          }
          {selectSpecies.fields["Image of fruit"] !== undefined
            ? <img src={selectSpecies.fields["Image of fruit"][0].thumbnails.large.url}></img>
            : null
          }
          {selectSpecies.fields["Image of Seed"] !== undefined
            ? <img src={selectSpecies.fields["Image of Seed"][0].thumbnails.large.url}></img>
            : null
          }
          {selectSpecies.fields["Image of Leaf"] !== undefined
            ? <img src={selectSpecies.fields["Image of Leaf"][0].thumbnails.large.url}></img>
            : null
          }
        </>
      )}
    </>
  );
};

export default Profile;

import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Airtable from "airtable";

const base = new Airtable({ apiKey: "keycVUqNgXbPQmTBb" }).base(
  "apppAm9jBXoifxazs"
);

const Profile = ({ treeData }) => {
  const [allSpecies, setAllSpecies] = useState([]);
  const [selectSpecies, setSelectSpecies] = useState([]);
  const { treeID } = useParams();

  useEffect(() => {
    setAllSpecies(treeData);
    const speciesData = allSpecies.filter((specie) => specie.id === treeID);
    console.log(speciesData);
    setSelectSpecies(speciesData[0]);
  }, [treeID]);

  return (
    <>
      <h1>{selectSpecies.fields["Botanical Name"]}</h1>
      <h2>{selectSpecies.fields["Family Botanical Name"]}</h2>
      <h2>{selectSpecies.fields["Other Known Names"]}</h2>
      <p>{selectSpecies.fields["Tree Profile"]}</p>
      <p>{selectSpecies.fields["Plant or Tree"]}</p>
      {selectSpecies.fields["Products and Uses"] !== undefined
        ? selectSpecies.fields["Products and Uses"].map((product) => <p>{product}</p>)
        : null}
    </>
  );
};

export default Profile;

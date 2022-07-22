import { useEffect, useState, useRef } from "react";
import Airtable from "airtable";

const base = new Airtable({ apiKey: "keycVUqNgXbPQmTBb" }).base(
  "apppAm9jBXoifxazs"
);

function FetchImages() {
  const [trees, setTrees] = useState([]);
  const [newArray, setNewArray] = useState([]);

  useEffect(() => {
    base("Our Trees")
      .select({ view: "Grid view", maxRecords: 665 })
      .eachPage((records, fetchNextPage) => {
        setTrees((current) => [...current, ...records]);
        fetchNextPage();
      });
  }, []);

  const fetchImages = async () => {
    trees.forEach((tree) => {
      if (tree.fields["Image of tree"] !== undefined) {
        tree.fields["Image of tree"].forEach((image) =>
          setNewArray((current) => [...current, [tree.id, tree.fields["Botanical Name"], image.url]])
        );
      }

      if (tree.fields["Image of Flower"] !== undefined) {
        tree.fields["Image of Flower"].forEach((image) =>
          setNewArray((current) => [...current, [tree.id, tree.fields["Botanical Name"], image.url]])
        );
      }

      if (tree.fields["Image of Leaf"] !== undefined) {
        tree.fields["Image of Leaf"].forEach((image) =>
          setNewArray((current) => [...current, [tree.id, tree.fields["Botanical Name"], image.url]])
        );
      }
    });
  };

  return (
    <>
      <button onClick={() => fetchImages()}>Fetch Images</button>
    </>
  );
}

export default FetchImages;

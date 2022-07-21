import { useEffect, useState } from "react";
import Airtable from "airtable";
import Trees from "./components/Trees";

const base = new Airtable({ apiKey: "keycVUqNgXbPQmTBb" }).base(
  "apppAm9jBXoifxazs"
);

const treesPerRow = 20;

function App() {
  const [trees, setTrees] = useState([]);
  const [next, setNext] = useState(treesPerRow);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [filter, setFilter] = useState(false);

  const productsAndUsesArray = [
    "Alcoholic Maceration",
    "Aromatic",
    "Craft Material",
    "Cultural Importance",
    "Edible",
    "Essential Oil",
    "Fruit",
    "Living Fence",
    "Medicine",
    "Nut",
    "Oil",
    "Ornamental",
    "Other",
    "Pollinator Attractor",
    "Resin",
    "Soil Improvement",
    "Timber"
  ];

  useEffect(() => {
    base("Our Trees")
      .select({ view: "Grid view", maxRecords: 665 })
      .eachPage((records, fetchNextPage) => {
        setTrees((current) => [...current, ...records])
        fetchNextPage();
      })
  }, []);

  const loadMoreTrees = () => {
    setNext(next + treesPerRow);
  };

  const searchItems = (searchValue) => {
    setFilter(false);
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = trees.filter((tree) => {
        const botanicalName = tree.fields["Botanical Name"]
          .toLowerCase()
          .includes(searchInput.toLowerCase());
        const familyName = tree.fields["Family Botanical Name"]
          .toLowerCase()
          .includes(searchInput.toLowerCase());
        if (tree.fields["Other Known Names"] !== undefined) {
          var commonName = tree.fields["Other Known Names"]
            .toLowerCase()
            .includes(searchInput.toLowerCase());
        }

        return botanicalName || familyName || commonName;
      });
      console.log(filteredData);
      setFilteredResults(filteredData);
    }
  };

  const plantOrTree = (value) => {
    const filteredData = trees.filter((tree) => {
      return tree.fields["Plant or Tree"].toString().includes(value);
    });

    setFilter(true);
    setFilteredResults(filteredData);
  };

  const productsAndUses = (value) => {
    const filteredData = trees.filter((tree) => {
      if (tree.fields["Products and Uses"] !== undefined) {
        return tree.fields["Products and Uses"].toString().includes(value);
      }
    });

    setFilter(true);
    setFilteredResults(filteredData);
  };

  return (
    <>
      <h1>Our Trees</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => searchItems(e.target.value)}
      />
      <button onClick={() => plantOrTree("Plant")}>Plant</button>
      <button onClick={() => plantOrTree("Tree")}>Tree</button>
      {productsAndUsesArray.map((products) => (
        <button onClick={() => productsAndUses(products)}>{products}</button>
      ))}

      {searchInput.length > 1 || filter === true
        ? filteredResults.map((tree) => {
            return <Trees key={tree.getId()} treeData={tree} />;
          })
        : trees.slice(0, next).map((tree) => {
            return <Trees key={tree.getId()} treeData={tree} />;
          })}

      {next < trees.length && (
        <button onClick={loadMoreTrees}>Load more</button>
      )}
    </>
  );
}

export default App;

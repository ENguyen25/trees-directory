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
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  
  useEffect(() => {
    base("Our Trees")
      .select({ view: "Grid view", pageSize: 20, maxRecords: 20 })
      .eachPage((records, fetchNextPage) => {
        setTrees((prevState) => [...prevState, ...records]);
        fetchNextPage();
      });
  }, []);

  const loadMoreTrees = () => {
    setNext(next + treesPerRow)
  }

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput.length !== '') {
      const filteredData = trees.filter((tree) => {
          const botanicalName = tree.fields["Botanical Name"].toLowerCase().includes(searchInput.toLowerCase());
          const familyName = tree.fields["Family Botanical Name"].toLowerCase().includes(searchInput.toLowerCase());
          const commonName = tree.fields["Other Known Names"].toLowerCase().includes(searchInput.toLowerCase());

          return botanicalName || familyName || commonName;
      })
      console.log(filteredData);
      setFilteredResults(filteredData);
    }
  }

  return (
    <>
      <h1>Our Trees</h1>
      <input type="text" placeholder="Search" onChange={(e) => searchItems(e.target.value)} />

      {searchInput !== '' ? (
        filteredResults.map((tree) => (
          <Trees key={tree.getId()} treeData={tree} />
        ))
      ) : (
        trees.slice(0, next).map((tree) => (
        <Trees key={tree.getId()} treeData={tree} />
      )))
      }

      {next < trees.length && (
        <button onClick={loadMoreTrees}>
          Load more
        </button>
      )}

    </>
  );
}

export default App;

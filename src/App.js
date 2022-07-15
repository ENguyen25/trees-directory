import { useEffect, useState } from "react";
import Airtable from "airtable";
import Trees from "./components/Trees";

const base = new Airtable({apiKey: 'keycVUqNgXbPQmTBb'}).base('apppAm9jBXoifxazs');

function App() {
  const [trees, setTrees] = useState([]);
  
  useEffect(() => {
    base("Our Trees")
    .select({ view: "Grid view", pageSize: 20 })
    .eachPage((records, fetchNextPage) => {
      setTrees(records);
      fetchNextPage();
    })

  }, []);

  return (
    <>
      <h1>Our Trees</h1>
      {trees.map(tree => (
        <Trees key={tree.id} treeData={tree} />
      ))}
    </>
  );
    
}

export default App;

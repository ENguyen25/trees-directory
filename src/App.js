import { useEffect, useState } from "react";
import Airtable from "airtable";
import { BrowserRouter as NavRouter, Routes, Route } from "react-router-dom";

import Trees from "./components/Trees";
import Profile from "./components/Profile";
import LandingPage from "./components/LandingPage";

const base = new Airtable({ apiKey: "keycVUqNgXbPQmTBb" }).base(
  "apppAm9jBXoifxazs"
);

function App() {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    base("Our Trees")
      .select({ view: "Grid view", maxRecords: 665 })
      .eachPage((records, fetchNextPage) => {
        setSpecies((current) => [...current, ...records]);
        fetchNextPage();
      });
  }, []);

  return (
    <>
      <NavRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            exact
            path="/species/:treeID"
            element={<Profile treeData={species} />}
          />
        </Routes>
      </NavRouter>
    </>
  );
}

export default App;

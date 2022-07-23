import { BrowserRouter as NavRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Profile from "./components/Profile";
import LandingPage from "./pages/LandingPage";

function App() {

  return (
    <>
      <NavRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            exact
            path="/species/:treeID"
            element={<Profile />}
          />
        </Routes>
      </NavRouter>
    </>
  );
}

export default App;

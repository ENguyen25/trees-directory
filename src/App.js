import { BrowserRouter as NavRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Profile from "./components/Profile/Profile";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <>
      <NavRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            exact
            path="/species/:treeID"
            element={<Profile />}
          />
        </Routes>
        <Footer />
      </NavRouter>
    </>
  );
}

export default App;

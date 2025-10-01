import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Seat from "./components/Seat";
import Skiner from "./components/Skiner";
import Customers from "./components/Customers";
import Contact from "./components/Contact";

function App() {
  const [language, setLanguage] = useState("en");
  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "en" ? "he" : "en"));

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Landing language={language} toggleLanguage={toggleLanguage} />
            }
          />
          <Route
            path="/home"
            element={
              <Home language={language} toggleLanguage={toggleLanguage} />
            }
          />
          <Route
            path="/seat"
            element={
              <Seat language={language} toggleLanguage={toggleLanguage} />
            }
          />
          <Route
            path="/skiner"
            element={
              <Skiner language={language} toggleLanguage={toggleLanguage} />
            }
          />
          <Route
            path="/customers"
            element={
              <Customers language={language} toggleLanguage={toggleLanguage} />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact language={language} toggleLanguage={toggleLanguage} />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

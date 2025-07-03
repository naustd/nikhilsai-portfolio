import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ToggleIcon from "./app/ToggleIcon";
import ThemeToggle from "./app/ThemeToggle";

import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
      <ThemeToggle />
    </>
  );
}

export default App;

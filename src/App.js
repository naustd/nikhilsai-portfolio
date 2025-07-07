import "./App.css";
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import ToggleIcon from "./app/ToggleIcon";
import ThemeToggle from "./app/ThemeToggle";

import About from "./components/About";
import Home from "./components/Home";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      // default:
      //   return <Home />;
    }
  };
  return (
    <>
      <div className="min-h-screen font-sans bg-gray-100">
        <Header
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />
        <Home />
        <About />
        <Projects />
        <Contact />
        <main className="p-4">{renderSection()}</main>
        <ThemeToggle />
      </div>
    </>
  );
}

export default App;

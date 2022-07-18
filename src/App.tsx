import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
    </div>
  );
}

export default App;

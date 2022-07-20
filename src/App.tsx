import React from "react";
import { useInView } from "react-intersection-observer";
import "./App.css";
import Navbar from "./Components/Navbar";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Home from "./Pages/Home/Home";

function App() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
    </div>
  );
}

export default App;

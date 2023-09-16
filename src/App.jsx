import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Cards from "./components/Cards/Cards";
import "./App.css";
function App() {
  return (
    <>
      <div className="relative">
        <NavBar />
        <Cards />
      </div>
    </>
  );
}

export default App;

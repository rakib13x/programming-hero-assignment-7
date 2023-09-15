import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Cards from "./components/Cards/Cards";
import CheckOut from "./components/Checkout/CheckOut";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="relative">
        <NavBar />
        <Cards />
        <CheckOut />
      </div>
    </>
  );
}

export default App;

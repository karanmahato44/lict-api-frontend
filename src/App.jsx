import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import BodyContent from "./components/BodyContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <BodyContent />
    </>
  );
}

export default App;

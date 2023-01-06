import { useState, useEffect } from "react";
import "./App.css";
import ImageHolder from "./components/ImageHolder";
import NavBar from "./components/Navbar";

const App = () => {
  const [x, setX] = useState(window.innerWidth);
  const [y, setY] = useState(window.innerHeight);
  const [chars, setChars] = useState([
    { charName: "no face" },
    { charName: "saitama" },
    { charName: "vash" },
  ]);

  useEffect(() => {
    const handleResize = () => {
      setX(window.innerWidth);
      setY(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
  });

  const handleClick = (event) => {};

  return (
    <>
      <NavBar charsLeft={chars.length} />
      <ImageHolder handleClick={handleClick} />
    </>
  );
};

export default App;

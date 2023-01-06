import { useState, useEffect } from "react";
import "./App.css";
import ImageHolder from "./components/ImageHolder";
import NavBar from "./components/Navbar";
import { firestore } from "./firebase/firebase";

const App = () => {
  const [screenX, setScreenX] = useState(window.innerWidth);
  const [screenY, setScreenY] = useState(window.innerHeight);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [chars, setChars] = useState([
    { charName: "no face" },
    { charName: "saitama" },
    { charName: "vash" },
  ]);
  let secondX;
  useEffect(() => {
    const handleResize = () => {
      setScreenX(window.innerWidth);
      setScreenY(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
  });

  const handleClick = (event) => {};

  const putCoordinatesInDb = (e) => {
    if (secondX === undefined) return (secondX = x);
    console.log(secondX);
  };

  return (
    <>
      <NavBar charsLeft={chars.length} />
      <ImageHolder handleClick={handleClick} />
    </>
  );
};

export default App;

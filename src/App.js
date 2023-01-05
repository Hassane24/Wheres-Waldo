import { useState, useEffect } from "react";
import "./App.css";
import ImageHolder from "./components/ImageHolder";
import NavBar from "./components/Navbar";
import MouseClick from "./components/MouseClick";
import universe113 from "./assets/universe-113.jpg";

const App = () => {
  const [x, setX] = useState(window.innerWidth);
  const [y, setY] = useState(window.innerHeight);
  const [mouseClick, setMouseClick] = useState(false);
  const [chars, setChars] = useState([
    { charName: "no face", found: false },
    { charName: "saitama", found: false },
    { charName: "vash", found: false },
  ]);

  useEffect(() => {
    const handleResize = () => {
      setX(window.innerWidth);
      setY(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
  });

  const handleClick = async (e) => {
    await setMouseClick(!mouseClick);
    return <MouseClick clicked={mouseClick} x={e.pageX} y={e.pageY} />;
  };
  return (
    <>
      <NavBar charsLeft="" />
      <ImageHolder
        image={universe113}
        onClickHandler={(e) => {
          setMouseClick(!mouseClick);
          return <MouseClick clicked={mouseClick} x={e.pageX} y={e.pageY} />;
        }}
      />
    </>
  );
};

export default App;

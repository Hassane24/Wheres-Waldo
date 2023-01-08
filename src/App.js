import { useState, useEffect } from "react";
import "./App.css";
import ImageHolder from "./components/ImageHolder";
import NavBar from "./components/Navbar";
import { firestore } from "./firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const App = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [chars, setChars] = useState([
    { charName: "no-face" },
    { charName: "saitama" },
    { charName: "vash" },
  ]);

  const handleClick = (event) => {
    setX(parseFloat((event.pageX / event.target.offsetWidth).toFixed(4)));
    setY(
      parseFloat(((event.pageY - 151) / event.target.offsetHeight).toFixed(4))
    );
  };

  const clickHandler = async (e) => {
    const charName = e.target.innerText.toLowerCase().split(" ").join("-");
    const docRef = doc(firestore, "characters", charName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const doc = docSnap.data();
      const { xMax, xMin, yMax, yMin } = doc;
      if (x < xMax && x > xMin && y < yMax && y > yMin) {
        setChars((prevState) => {
          let newState = [...prevState];
          newState = newState.filter((char) => char.charName !== charName);
          return newState;
        });
      }
    }
  };

  return (
    <>
      <NavBar charsLeft={chars.length} />
      <ImageHolder handleClick={handleClick} clickHandler={clickHandler} />
    </>
  );
};

export default App;

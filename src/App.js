import { useState } from "react";
import "./App.css";
import ImageHolder from "./components/ImageHolder";
import NavBar from "./components/Navbar";
import WinningModal from "./components/WinningModal";
import { firestore } from "./firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const App = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [chars, setChars] = useState([
    { charName: "no-face" },
    { charName: "vash" },
    { charName: "saitama" },
  ]);
  const [foundChars, setFoundChars] = useState([]);

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
          // finding the character before deleting it from chars array so to push it into foundChars array
          const foundChar = newState.find((char) => char.charName === charName);
          setFoundChars([...foundChars, foundChar]);
          newState = newState.filter((char) => char.charName !== charName);
          return newState;
        });
      } else {
        // handles the case where a user clicks on the wrong place
        const feedBackElement = document.querySelector(".click-feed-back");
        feedBackElement.classList.add("active");
        feedBackElement.textContent = "Keep looking";
      }
    }
  };

  const showFeedBackMessage = () => {
    const feedBackElement = document.querySelector(".click-feed-back");
    if (foundChars === undefined || foundChars.length == 0) return "";
    else {
      feedBackElement.classList.add("active");
      // the last element in the foundChars array is always the most recent character found
      const foundCharName = foundChars[foundChars.length - 1].charName
        .split("-")
        .join(" ");
      return `You found ${foundCharName}`;
    }
  };

  return (
    <>
      <NavBar charsLeft={chars.length} feedBack={showFeedBackMessage()} />
      <ImageHolder
        handleClick={handleClick}
        clickHandler={clickHandler}
        chars={chars}
      />
      <WinningModal
        won={true}
        highScores={[
          "00:00:00",
          "00:00:00",
          "00:00:00",
          "00:00:00",
          "00:00:00",
        ]}
      />
    </>
  );
};

export default App;

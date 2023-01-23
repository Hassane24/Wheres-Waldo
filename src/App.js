import { useState } from "react";
import "./App.css";
import ImageHolder from "./components/ImageHolder";
import NavBar from "./components/Navbar";
import WinningModal from "./components/WinningModal";
import { firestore } from "./firebase/firebase";
import { doc, getDoc, collection, getDocs, setDoc } from "firebase/firestore";
let highScore = [];

const App = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [foundChars, setFoundChars] = useState([]);
  const [didGameEnd, setDidGameEnd] = useState(false);
  const [valueForInput, setValueForInput] = useState("");
  const [showInputForUser, setShowInputForUser] = useState(false);
  const [highScores, setHighScores] = useState([]);
  const [chars, setChars] = useState([
    { charName: "no-face" },
    { charName: "vash" },
    { charName: "saitama" },
  ]);

  const gameIsWon = async () => {
    const WinningModal = document.querySelector(".winning-modal");
    const overlay = document.querySelector(".overlay");
    const userTime = document.querySelector(".restart h3");
    const timer = document.querySelector(".timer");

    if (foundChars.length === 2) {
      await getHighScoresFromDB(timer);
      setDidGameEnd(true);
      WinningModal.classList.add("active");
      overlay.classList.add("active");
      userTime.textContent = timer.textContent;
    }
  };

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
        gameIsWon();
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

  const handleModalClick = async (e) => {
    const feedBackElement = document.querySelector(".click-feed-back");
    const WinningModal = document.querySelector(".winning-modal");
    const userTime = document.querySelector(".restart h3");
    const overlay = document.querySelector(".overlay");
    const input = document.querySelector("input");

    if (e.target.className === "restart-button") {
      setChars([
        { charName: "no-face" },
        { charName: "vash" },
        { charName: "saitama" },
      ]);
      setDidGameEnd(false);
      setFoundChars([]);
      setX(0);
      setY(0);
      setShowInputForUser(false);
      setValueForInput("");
      setHighScores([]);
      feedBackElement.classList.remove("active");
      WinningModal.classList.remove("active");
      overlay.classList.remove("active");
    }

    if (e.target.className === "submit") {
      if (input.value === "") return;
      setHighScores([]);
      await setDoc(doc(firestore, "high scores", input.value), {
        time: userTime.textContent,
      });
      await getHighScoresFromDB();
    }
  };

  const showFeedBackMessage = () => {
    const feedBackElement = document.querySelector(".click-feed-back");
    if (foundChars === undefined || foundChars.length === 0) return "";
    else {
      feedBackElement.classList.add("active");
      // the last element in the foundChars array is always the most recent character found
      const foundCharName = foundChars[foundChars.length - 1].charName
        .split("-")
        .join(" ");
      return `You found ${foundCharName}`;
    }
  };

  const getHighScoresFromDB = async (timer) => {
    let highScoresFromDB = [];
    const querySnapshot = await getDocs(collection(firestore, "high scores"));
    querySnapshot.forEach((doc) => {
      highScoresFromDB.push({ name: doc.id, time: doc.data().time });
      setHighScores((prevState) => {
        let newState = [...prevState, { name: doc.id, time: doc.data().time }];
        return newState;
      });
    });

    setHighScores((prevState) => {
      let newState = [...prevState]
        .sort((a, b) => (a.time > b.time ? 1 : a.time < b.time ? -1 : 0))
        .slice(0, 5);

      return newState;
    });

    highScoresFromDB.sort((a, b) =>
      a.time > b.time ? 1 : a.time < b.time ? -1 : 0
    );
    highScoresFromDB = highScoresFromDB.slice(0, 5);

    fiveScoresOrNot(highScoresFromDB, timer);
    return highScores;
  };

  const fiveScoresOrNot = (highScoresFromDB, time) => {
    if (!time) return;
    if (
      highScoresFromDB.length === 5 &&
      highScoresFromDB.every((highScore) => highScore.time < time.textContent)
    )
      return;
    else setShowInputForUser(true);
  };

  return (
    <>
      <NavBar
        charsLeft={chars}
        feedBack={showFeedBackMessage()}
        didGameEnd={didGameEnd}
      />
      <ImageHolder
        handleClick={handleClick}
        clickHandler={clickHandler}
        chars={chars}
      />
      <WinningModal
        handleModalClick={handleModalClick}
        highScores={highScores}
        valueForInput={valueForInput}
        handleInputChange={(e) => setValueForInput(e.target.value)}
        display={showInputForUser}
      />
    </>
  );
};

export default App;

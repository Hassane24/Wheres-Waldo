import CharacterHolder from "./CharacterHolder";
import Timer from "./Timer";
import "../styles/Navbar.css";
const NavBar = ({ charsLeft, feedBack, didGameEnd }) => (
  <div className="nav-bar">
    {charsLeft.map((char, index) => (
      <CharacterHolder
        key={index}
        charName={
          char.charName.charAt(0).toUpperCase() +
          char.charName.slice(1).split("-").join(" ")
        }
        className={char.charName}
      ></CharacterHolder>
    ))}

    <div className="click-feed-back">{feedBack}</div>
    <Timer didGameEnd={didGameEnd} />
    <div className="chars-left">{charsLeft.length}</div>
  </div>
);
export default NavBar;

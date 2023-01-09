import CharacterHolder from "./CharacterHolder";
import Timer from "./Timer";
import "../styles/Navbar.css";
const NavBar = ({ charsLeft, feedBack, didGameEnd }) => (
  <div className="nav-bar">
    <CharacterHolder className="no-face" charName="No face" />
    <CharacterHolder className="saitama" charName="Saitama" />
    <CharacterHolder className="vash" charName="Vash" />
    <div className="click-feed-back">{feedBack}</div>
    <Timer didGameEnd={didGameEnd} />
    <div className="chars-left">{charsLeft}</div>
  </div>
);
export default NavBar;

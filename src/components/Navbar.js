import CharacterHolder from "./CharacterHolder";
import "../styles/Navbar.css";
const NavBar = ({ charsLeft, feedBack }) => (
  <div className="nav-bar">
    <CharacterHolder className="no-face" charName="No face" />
    <CharacterHolder className="saitama" charName="Saitama" />
    <CharacterHolder className="vash" charName="Vash" />
    <div className="click-feed-back">{feedBack}</div>
    <div className="chars-left">{charsLeft}</div>
  </div>
);
export default NavBar;

import CharacterHolder from "./CharacterHolder";
import "../styles/Navbar.css";
import noFace from "../assets/no-face.jpg";
import saitama from "../assets/saitama.jpg";
import vash from "../assets/vash-the-stampede.jpg";
const NavBar = ({ charsLeft }) => (
  <div className="nav-bar">
    <CharacterHolder image={noFace} charName="No face" />
    <CharacterHolder image={saitama} charName="Saitama" />
    <CharacterHolder image={vash} charName="Vash the stampede" />
    <div className="chars-left">{charsLeft}</div>
  </div>
);
export default NavBar;

import CharacterHolder from "./CharacterHolder";
import noFace from "../assets/no-face.jpg";
import saitama from "../assets/saitama.jpg";
import vash from "../assets/vash-the-stampede.jpg";
const NavBar = ({ charsLeft }) => (
  <div className="nav-bar">
    <CharacterHolder image={noFace} />
    <CharacterHolder image={saitama} />
    <CharacterHolder image={vash} />
    <div className="chars-left">{charsLeft}</div>
  </div>
);
export default NavBar;

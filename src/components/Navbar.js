const NavBar = ({ charsLeft }) => (
  <div className="nav-bar">
    <div className="char-holder">
      <img src="" alt="" className="char" />
    </div>
    <div className="char-holder">
      <img src="" alt="" className="char" />
    </div>
    <div className="char-holder">
      <img src="" alt="" className="char" />
    </div>
    <div className="chars-left">{charsLeft}</div>
  </div>
);
export default NavBar;

const CharacterHolder = ({ image, charName }) => (
  <div className="char-holder">
    <img src={image} alt="" className="char" />
    <div className="char-name">{charName}</div>
  </div>
);
export default CharacterHolder;

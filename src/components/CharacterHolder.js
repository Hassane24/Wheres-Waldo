const CharacterHolder = ({ className, charName }) => (
  <div className="char-holder">
    <div className={className} />
    <div className="char-name">{charName}</div>
  </div>
);
export default CharacterHolder;

import "../styles/WinningModal.css";
const WinningModal = ({
  handleModalClick,
  highScores,
  valueForInput,
  handleInputChange,
  display,
}) => {
  return (
    <>
      <div className="winning-modal" onClick={handleModalClick}>
        <div className="winning-message">
          You won, How does it feel making my game useless ?
        </div>
        <div className="high-score-container">
          <div className="high-scores">
            <h1>High Scores</h1>
            <ol>
              {highScores.map((highScore, index) => (
                <li key={index}>
                  {highScore.name}:{highScore.time}
                </li>
              ))}
            </ol>
          </div>
          <div className="restart">
            <h1>Your time: </h1>
            <h3></h3>
            <button className="restart-button">Restart</button>
          </div>
        </div>
        {display ? (
          <div className="username-form">
            <input
              type="text"
              id="username"
              value={valueForInput}
              onChange={handleInputChange}
            />
            <button className="submit">Submit your name</button>
          </div>
        ) : null}
      </div>
      <div className="overlay"></div>
    </>
  );
};
export default WinningModal;

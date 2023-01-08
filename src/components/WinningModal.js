const WinningModal = ({ won, handleModalClick, time, highScores }) => {
  if (won)
    return (
      <div className="winning-modal" onClick={handleModalClick}>
        <div className="winning-message">
          You won, How does it feel making my game useless
        </div>
        <div className="high-score-container">
          <div className="high-scores">
            <h1>High Scores</h1>
            <ol>
              {highScores.map((highScore, index) => (
                <li key={index}>{highScore}</li>
              ))}
            </ol>
          </div>
          <div className="restart">
            <h1>Your time: </h1>
            <h3>{time}</h3>
            <button className="restart-button">Restart</button>
          </div>
        </div>
      </div>
    );
  return null;
};
export default WinningModal;

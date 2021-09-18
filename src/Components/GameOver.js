function GameOver(props) {
  let gameProgress = <h1> &nbsp;</h1>;
  if (props.gameState === "WIN") {
    gameProgress = (
      <div className="game-over">
        Good job! {props.secretNumber} is the correct answer!{" "}
      </div>
    );
  } else if (props.gameState === "LOSE") {
    gameProgress = (
      <div className="game-over">
        {" "}
        Try Again! The correct answer is {props.secretNumber}
      </div>
    );
  }

  return <div>{gameProgress}</div>;
}

export default GameOver;

import { useState, useEffect } from "react";
import "./App.css";
import {
  generateRandomNumber,
  isAlreadyAttempted,
  isAttemptProper,
  determineBullsAndCows,
  isGameOver,
} from "./Components/GamePlay";
import GameOver from "./Components/GameOver";
import GameHistory from "./Components/GameHistory";
import Alerts from "./Components/Alerts";
import Header from "./Components/Header";

function App() {
  const [logs, updateLogs] = useState(Array.from(Array(12), () => []));
  const [secretNumber, _setSecretNumber] = useState(generateRandomNumber());
  const [attempt, setAttempt] = useState("");
  const [gameState, setGameState] = useState("IN PROGRESS");
  const [errorMessage, setErrorMessage] = useState(null);

  function handleInput() {
    try {
      if (!isAttemptProper(attempt)) {
        throw new Error(
          "INVALID DATA ENTRY! Item must contain 4 unique digits and must not start with 0."
        );
      }
      if (isAlreadyAttempted(logs, attempt)) {
        throw new Error(
          "INVALID DATA ENTRY! You already tried that combination."
        );
      }

      let updatedLog = insertGameHistory();
      updateLogs(updatedLog);
      // clear input field
      setAttempt("");
      // calculate gamestate on proper submission
      setGameState(isGameOver(updatedLog));
      // case of no errors so far:
      setErrorMessage(null);
    } catch (error) {
      // clear input for invalid inputs as well
      setAttempt("");
      setErrorMessage(error.message);
    }
  }

  // insert the new attempt in most recent slot. return new log.
  function insertGameHistory() {
    let newLog = [...logs]; // create copy
    for (let i = 0; i < 12; i++) {
      if (newLog[i].length === 0) {
        // check bulls n cows.
        // update attempts as tuple: ["1234", "1A2B"]
        newLog[i] = [attempt, determineBullsAndCows(secretNumber, attempt)];
        break;
      }
    }
    return newLog;
  }

  // update attempt as input changes.
  function handleInputChange(e) {
    setAttempt(e.target.value);
  }

  // reset the states, effectively starting a new game.
  function reset() {
    updateLogs(Array.from(Array(12), () => []));
    _setSecretNumber(generateRandomNumber());
    setAttempt("");
    setErrorMessage("");
    setGameState("IN PROGRESS");
  }

  // handle enter to "guess" in input.
  // https://github.com/NatTuck/scratch-2021-01/blob/bea430447baec22eb1a5e41d4d1fcce0191b36a3/4550/0202/hangman/src/App.js#L58
  function keyPress(ev) {
    if (ev.key === "Enter") {
      handleInput();
    }
  }

  // when this function renders, set title
  useEffect(() => {
    document.title = "Bulls and Cows";
  }, []);

  return (
    <div className="container">
      <Header />

      <div className="input-container">
        <input
          id="numberInput"
          type="number"
          onKeyPress={keyPress}
          onChange={handleInputChange}
          value={attempt}
          disabled={gameState !== "IN PROGRESS" ? "disabled" : ""}
          placeholder="Enter 4 unique digits here"
          className="input-text"
        ></input>
        <div>
          <button
            disabled={gameState !== "IN PROGRESS" ? "disabled" : ""}
            onClick={() => handleInput()}
            className="guess-button"
          >
            Guess
          </button>
          <button className="reset-button" onClick={() => reset()}>
            Reset
          </button>
        </div>
      </div>
      <div className="row">
        <Alerts error={errorMessage} />
        <GameHistory logs={logs} />
      </div>
      <div className="row">
        <GameOver gameState={gameState} secretNumber={secretNumber} />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
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

function App() {
  //sets the guess array to only allow 12 attempts (initial state - 12 empty arrays)
  const [logs, updateLogs] = useState(Array.from(Array(12), () => []));
  // generates the secret number - state of random number - blank
  const [secretNumber, _setSecretNumber] = useState(generateRandomNumber());
  // setts attempt state to blank string
  const [attempt, setAttempt] = useState("");
  // sets game state to inprogress - in progress state allows user to make attempts and enables the "guess button"
  const [gameState, setGameState] = useState("IN PROGRESS");
  // sets the error message to null
  const [errorMessage, setErrorMessage] = useState("");

  function handleInput() {
    //try statement tests the block of code for errors
    try {
      // if the attempt is NOT "proper" (declared in gameplay (<4 digits, starts with 0, blank))
      if (!isAttemptProper(attempt)) {
        throw new Error(
          "INVALID DATA ENTRY! Item must contain 4 unique digits and must not start with 0."
        );
      }
      // if data has already been logged - also declared in gameplay
      if (isAlreadyAttempted(logs, attempt)) {
        throw new Error(
          "INVALID DATA ENTRY! You already tried that combination."
        );
      }
      // code that declares game history - updates the logs
      let updatedLog = insertGameHistory();
      updateLogs(updatedLog);
      // clears the input field
      setAttempt("");
      // checks the game state - if game is over or still in progress
      setGameState(isGameOver(updatedLog));
      // error prompt hides in the screen if there are no errors
      setErrorMessage(null);

      //catch statements handles the error
    } catch (error) {
      setAttempt("");
      setErrorMessage(error.message);
    }
  }

  // inserts the valid attempt in the next available slot
  function insertGameHistory() {
    // creates a copy of the new logs
    let newLog = [...logs];
    // for loop for the new log per attempt
    for (let i = 0; i < 12; i++) {
      if (newLog[i].length === 0) {
        // checks for number of bulls and cows
        // checks secret numebr against attempt (logs # of bulls and # of cows)
        newLog[i] = [attempt, determineBullsAndCows(secretNumber, attempt)];
        break;
      }
    }
    // returns the newLog to the board
    return newLog;
  }

  // updates attempt as input changes
  function handleInputChange(e) {
    setAttempt(e.target.value);
  }

  // guess input is placed once ENTER is pressed
  function keyPress(e) {
    if (e.key === "Enter") {
      handleInput();
    }
  }

  // resets the states to start a new game
  // same values declared  in the set state code
  function reset() {
    updateLogs(Array.from(Array(12), () => []));
    _setSecretNumber(generateRandomNumber());
    setAttempt("");
    setErrorMessage("");
    setGameState("IN PROGRESS");
  }

  return (
    <div className="container">
      <Header />
      <div className="input-container">
        <input
          id="numberInput"
          type="number"
          onKeyPress={keyPress}
          onChange={handleInputChange}
          //from gameplay
          value={attempt}
          //disables the input field once game is over
          disabled={gameState !== "IN PROGRESS" ? "disabled" : ""}
          placeholder="Enter 4 unique digits here"
          className="input-text"
        ></input>
        <div>
          <button
            //disables the guess button once game is over
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
      <div className="">
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

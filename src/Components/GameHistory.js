import React from "react";

const GameHistory = (props) => {
  return (
    <div className="attempt-container">
      <div className="attempt-individual">
        <div className="attempt-title">Attempt </div>
        <div className="attempt-title">Guess</div>
        <div className="attempt-title">Bulls & Cows</div>
      </div>
      {props.logs.map((log, idx) => (
        <div className="attempt-individual" key={idx}>
          <div className="attempt-details">Number {idx + 1} </div>
          <div className="attempt-details">{log[0]}</div>
          <div className="attempt-details">{log[1]}</div>
        </div>
      ))}
    </div>
  );
};

export default GameHistory;

import React from "react";

function AttemptLogs(props) {
  return (
    <div className="attempt-container">
      <div className="attempt-individual">
        <div className="attempt-details">Attempt </div>
        <div className="attempt-details">Guess</div>
        <div className="attempt-details">Result</div>
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
}

export default AttemptLogs;

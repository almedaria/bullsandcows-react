import React from "react";

const ErrorMessage = (props) => {
  let errorBody = <div className="alerts">&nbsp;</div>;

  if (props.error) {
    errorBody = <div className="alerts">{props.error}</div>;
  }
  return <div>{errorBody}</div>;
};

export default ErrorMessage;

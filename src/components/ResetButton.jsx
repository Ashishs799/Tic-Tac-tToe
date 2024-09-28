import React from "react";
import "./ResetButton.css";

const ResetButton = ({ resetMatch }) => {
  return (
    <button className="button" onClick={resetMatch}>
      New Match
    </button>
  );
};

export default ResetButton;

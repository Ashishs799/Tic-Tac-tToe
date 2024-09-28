import React from "react";
import "./Board.css";

const Square = ({ value }) => {
  return (
    <button type="button" className="square">
      {value}
    </button>
  );
};

export default Square;

import React from "react";
import "./Board.css";

const Square = ({ value, handleClick, onClick }) => {
  return (
    <button
      type="button"
      className={`square ${
        value === "X" ? "x-class" : value === "O" ? "o-class" : ""
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;

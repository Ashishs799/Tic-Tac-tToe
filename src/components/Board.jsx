import React, { useState } from "react";
import "./Board.css";
import { FaCircleDot } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

import Square from "./Square";
import ResetButton from "./ResetButton";

export const Board = () => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  console.log(cells);

  const handleClick = (index) => {
    const updatedCells = [...cells];
    updatedCells[index] = isXTurn ? "X" : "O";
    setCells(updatedCells);
    setIsXTurn(!isXTurn);
  };

  const selectWinner = () => {
    const winningPoints = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPoints.length; i++) {
      const [a, b, c] = winningPoints[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }
    return null;
  };

  const isWinner = selectWinner();

  const resetMatch = () => {
    setCells(Array(9).fill(null));
  };
  return (
    <div className="container flex_column_center">
      <h1>Tic Tac Toe</h1>
      <h2 className={`congrats-message ${isWinner ? "show" : "display_none"}`}>
        {isWinner} Won The Game 🎊🎊
      </h2>

      <div className="wrapper flex_column">
        <div className="row flex_space row1">
          <Square value={cells[0]} onClick={() => handleClick(0)} />
          <Square value={cells[1]} onClick={() => handleClick(1)} />
          <Square value={cells[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="row flex_space row2">
          <Square value={cells[3]} onClick={() => handleClick(3)} />
          <Square value={cells[4]} onClick={() => handleClick(4)} />
          <Square value={cells[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="row flex_space row3">
          <Square value={cells[6]} onClick={() => handleClick(6)} />
          <Square value={cells[7]} onClick={() => handleClick(7)} />
          <Square value={cells[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
      <ResetButton resetMatch={resetMatch} />
    </div>
  );
};

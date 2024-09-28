import React, { useState } from "react";
import "./Board.css";
import Square from "./Square";

export const Board = () => {
  const [count, setCount] = useState(null);

  const clickCount = () => {};
  return (
    <div className="container flex_center">
      <div className="wrapper flex_column">
        <div className="row flex_space">
          <Square value={0} />
          <Square value={1} />
          <Square value={2} />
        </div>
        <div className="row flex_space">
          <Square value={3} />
          <Square value={4} />
          <Square value={5} />
        </div>
        <div className="row flex_space">
          <Square value={6} />
          <Square value={7} />
          <Square value={8} />
        </div>
      </div>
    </div>
  );
};

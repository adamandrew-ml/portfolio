import React from "react";
import { useState } from "react";

const Play = (props) => {
  const [selectedGame, setSelectedGame] = useState("None");
  const games = [
    { label: "Sudoku" },
    { label: "Minesweeper" },
    { label: "2048" },
    { label: "Snake" },
  ];
  return (
    <div className={props.pageClassName} id="playId">
      <div className="h-full p-3 bg-slate-100 items-center select-none">
        <div className="h-full bg-slate-200 flex">
          <div className="w-1/8 bg-slate-800 text-white">
            <div className="mb-5">Select Game</div>
            <ul>
              {games.map((item, i) => (
                <li
                  className="hover:text-amber-500 hover:cursor-pointer select-none"
                  key={i}
                  onClick={(e) => setSelectedGame(item.label)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-7/8 bg-slate-500 text-white">{selectedGame}</div>
        </div>
      </div>
    </div>
  );
};

export default Play;

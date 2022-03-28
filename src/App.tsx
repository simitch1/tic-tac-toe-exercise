import { useState } from "react";
import Board from "./Board";
import Cell from "./Cell";
import Results from "./Results";
type Players = "X" | "O";
export type Value = Players | null;
function checkWinner(cells: Value[]): Value {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];
  for (const condition of winConditions) {
    if (
      cells[condition[0]] === cells[condition[1]] &&
      cells[condition[1]] === cells[condition[2]]
    ) {
      return cells[condition[1]];
    }
  }
  return null;
}
function checkGameCompleted(cells: Value[]): boolean {
  return cells.findIndex((x) => !x) > -1 ? false : true;
}

function App() {
  const STARTING_CELLS_STATES = Array(9).fill(null);
  const [currentPlayer, setCurrentPlayer] = useState<Players>("X");
  const [cells, setCells] = useState<Value[]>(STARTING_CELLS_STATES);
  const handleClick = (i: number, value: Value): void => {
    const cellsValues = [...cells];
    if (cellsValues[i]) {
      return;
    }
    cellsValues[i] = value;
    setCells(cellsValues);
    setCurrentPlayer(value === "O" ? "X" : "O");
  };

  const winner = checkWinner(cells);
  const gameCompleted = checkGameCompleted(cells);
  const reset = () => {
    setCurrentPlayer("X");
    setCells(STARTING_CELLS_STATES);
  };
  return (
    <div className="w-full h-full flex flex-col items-center p-8">
      <p className="mb-10 flex items-center">
        <span className="font-bold text-2xl mr-1">{currentPlayer}</span> Turn
      </p>
      {winner || gameCompleted ? (
        <Results winners={winner} />
      ) : (
        <Board>
          {cells.map((cellValue, i) => (
            <Cell
              key={i}
              value={cellValue}
              onClick={() => handleClick(i, currentPlayer)}
            ></Cell>
          ))}
        </Board>
      )}

      <button className="mt-4" onClick={() => reset()}>
        RESTART GAME
      </button>
    </div>
  );
}

export default App;

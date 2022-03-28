import React from "react";

const Board: React.FC = ({ children }) => (
  <div className="w-[500px] h-[500px] grid grid-cols-3 grid-rows-3 bor">
    {children}
  </div>
);

export default Board;

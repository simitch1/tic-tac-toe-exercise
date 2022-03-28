import { Value } from "./App";

export interface CellProps {
  value: Value;
  onClick: () => void;
}
const Cell = (props: CellProps) => (
  <div
    className=" bg-red-200 border-4 border-red-500 flex justify-center items-center text-[80px] hover:scale-[102%] hover:cursor-pointer"
    onClick={() => props.onClick()}
  >
    {props.value}
  </div>
);
export default Cell;

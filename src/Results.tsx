import { Value } from "./App";

export interface ResultsProps {
  winners: Value;
}
const Results = ({ winners }: ResultsProps) => (
  <div className=" w-[500px] h-[500px] bg-red-200 border-4 border-red-500 flex flex-col justify-center items-center text-[80px] ">
    {winners ? <p>{winners}</p> : <p>X O</p>}
    {winners ? <p>WINNER!</p> : <p>DRAW!</p>}
  </div>
);
export default Results;

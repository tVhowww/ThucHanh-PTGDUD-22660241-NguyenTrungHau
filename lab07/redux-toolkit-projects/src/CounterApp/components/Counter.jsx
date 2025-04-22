import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.counter.count);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 border-1 rounded-xl p-20 shadow-2xl">
      <h1>Counter App</h1>
      <div className="text-lg">
        Result:
        <span className="text-2xl text-blue-600 ml-4 font-bold">{result}</span>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="px-4 py-2 !border-blue-400 !bg-blue-200 text-black hover:!bg-blue-600 !transition !outline-none"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 !border-red-400 !bg-red-200 text-black hover:!bg-red-600 !transition !outline-none"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="rounded bg-gray-500 w-80 p-4">
      <div className="text-white m-4">
        <span>{count}</span>
      </div>
      <div className="space-y-4">
        <div className="space-x-4">
          <CustomButton
            text="Increment"
            onClick={() => dispatch(increment())}
          />

          <CustomButton
            text="Decrement"
            onClick={() => dispatch(decrement())}
          />
        </div>
        <div className="space-x-4">
          <CustomButton
            text="Increment By 5"
            onClick={() => dispatch(incrementByAmount(5))}
          />

          <CustomButton
            text="Decrement By 5"
            onClick={() => dispatch(incrementByAmount(-5))}
          />
        </div>
      </div>
    </div>
  );
}

const CustomButton = ({ text, onClick }) => {
  return (
    <button
      aria-label={text}
      onClick={() => onClick()}
      className="bg-red-500 px-4 py-2 rounded text-white"
    >
      {text}
    </button>
  );
};

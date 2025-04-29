import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { increment } from "./features/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Counter: {count}</h1>
      <div className="mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white round-mr-2"
          onClick={() => dispatch(increment())}
        >
          {" "}
          +
        </button>
      </div>
    </div>
  );
}

export default App;

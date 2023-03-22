import React from "react";
import "./App.css";

import { useDispatch } from "react-redux";

import "./App.css";
import A from "./features/a/A";
import B from "./features/b/B";
import AB from "./features/ab/AB";
import C from "./features/c/C";
import { useCContext } from "./context/c";

import {
  decrement as decrementA,
  increment as incrementA,
} from "./features/a/aSlice";

import {
  decrement as decrementB,
  increment as incrementB,
} from "./features/b/bSlice";

function App() {
  const dispatch = useDispatch();
  const cContext = useCContext();
  const { increment, decrement } = cContext;

  return (
    <div className="App">
      <A>{/* <B /> */}</A>
      <C />
      <AB />

      <div style={{ margin: "50px" }}>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementA())}
        >
          Increment A
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrementA())}
        >
          Decrement A
        </button>
      </div>

      <div style={{ margin: "50px" }}>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementB())}
        >
          Increment B
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrementB())}
        >
          Decrement B
        </button>
      </div>

      <div style={{ margin: "50px" }}>
        <button aria-label="Increment value" onClick={() => increment()}>
          Increment C
        </button>

        <button aria-label="Decrement value" onClick={() => decrement()}>
          Decrement C
        </button>
      </div>
    </div>
  );
}

export default App;

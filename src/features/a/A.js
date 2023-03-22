import React from "react";
import { useSelector } from "react-redux";
// import { decrement, increment } from "./aSlice";

import B from "../b/B";

export default function A({ children }) {
  const count = useSelector((state) => state.a.value);

  console.log("A = " + count);
  return (
    <div style={{ border: "1px green solid", padding: "10px" }}>
      <div>A = {count}</div>
      <B />
      {/* {children} */}
    </div>
  );
}

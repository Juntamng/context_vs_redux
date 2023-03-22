import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function AB() {
  const a = useSelector((state) => state.a.value);
  const b = useSelector((state) => state.b.value);

  console.log("AB>A = " + a + " ; AB>B = " + b);
  return (
    <div
      style={{ border: "1px green solid", marginTop: "50px", padding: "10px" }}
    >
      A = {a} ; B = {b}
    </div>
  );
}

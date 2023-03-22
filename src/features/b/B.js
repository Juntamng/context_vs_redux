import React from "react";
import { useSelector } from "react-redux";

const B = () => {
  const count = useSelector((state) => state.b.value);

  console.log("B = " + count);

  return (
    <div style={{ border: "1px green solid", margin: "10px", padding: "10px" }}>
      B = {count}
    </div>
  );
};

// const BB = memo(function B() {
//   const count = useSelector((state) => state.b.value);

//   console.log("B = " + count);
//   return <div>B = {count}</div>;
// });

export default B;

import { useCContext } from "../../context/c";

const C = () => {
  const cContext = useCContext();
  const { count } = cContext;

  console.log("C = " + count);

  return (
    <div style={{ border: "1px green solid", margin: "10px", padding: "10px" }}>
      C = {count}
    </div>
  );
};

export default C;

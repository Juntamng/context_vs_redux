import React, { useState, useContext } from "react";
export const CContext = React.createContext(undefined);

const CProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((value) => value + 1);
  }

  function decrement() {
    setCount((value) => value - 1);
  }

  return (
    <CContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CContext.Provider>
  );
};

export const useCContext = () => {
  return useContext(CContext);
};

export default CProvider;

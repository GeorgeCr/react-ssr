import React, { useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <button onClick={increase}>+</button>
      {counter}
    </>
  );
};

export default Home;

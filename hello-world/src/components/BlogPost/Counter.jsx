import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount((currValue) => currValue + 1);
  }

  return (
    <>
      <button className="counter" onClick={incrementCounter}>
        Compartilhar
      </button>
      <span>Post compartilhado {count} vezes.</span>
    </>
  );
}

export default Counter;

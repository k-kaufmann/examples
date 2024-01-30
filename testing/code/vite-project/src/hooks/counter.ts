import { useState } from "react";

export function useCounter() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter((counter) => counter + 1);
  }

  function decrease() {
    setCounter(() => counter - 1);
  }

  return { counter, increase, decrease };
}

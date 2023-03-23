import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  return [count, increment]

}

export default useCounter
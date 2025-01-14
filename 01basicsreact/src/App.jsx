import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Hello React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>Decrement</button>
    </>
  );
}

export default App;

import "./App.css";
import { useList } from "./hooks/useList";
import { useCounter } from "./hooks/useCounter";

function App() {
  const [uselist1, { push, pop, clear, reset, map }]: any = useList([1, 2, 3]);
  const { value, increment, decrement, set } = useCounter(10);
  return (
    <div className="App">
      <button onClick={() => push(uselist1.length + 1)}>APPEND</button>
      <button onClick={() => pop()}>POP</button>
      <button onClick={() => clear()}>CLEAR</button>
      <button onClick={() => reset()}>RESET</button>
      <button onClick={() => map((e: any) => e * 2)}>
        DOUBLE EVERY ELEMENT
      </button>
      {uselist1.map((ul: any) => (
        <div key={ul}>{ul}</div>
      ))}

      <br />
      <br />
      <button onClick={() => increment(1)}>Increment 1</button>
      <button onClick={() => increment(3)}>Increment 3</button>
      <button onClick={() => decrement(1)}>Decrement 1</button>
      <button onClick={() => decrement(4)}>Decrement 4</button>
      <button onClick={() => set(100)}>Set counter to 100</button>
      <h3>Output: {value}</h3>
    </div>
  );
}

export default App;
// Entire thing bellow should work. you don't have to edit this file, only implement  hooks
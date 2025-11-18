import "./App.css";
import { useStore } from "./useStore";
function App() {
  const { count, increment, decrement } = useStore((s) => ({
    count: s.count,
    increment: s.increment,
    decrement: s.decrement,
  }));
  return (
    <>
      <h1>Counter</h1>
      <h1> Count {count}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </>
  );
}

export default App;

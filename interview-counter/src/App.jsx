import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCounter] = useState(15)
  function adder() {
    setCounter(count + 1)
  }
  function subtractor() {
    setCounter(count - 1)
  }
  return (
    <>
    <h1>Counter :{count}</h1>
    <button onClick={adder}>Increment</button>
    <button onClick={subtractor}>Decrement</button>
    </>
  )
}

export default App

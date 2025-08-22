import { useState } from 'react';
import React from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
    <div className="border-2 border-solid border-black mb-8">Container</div>
    <div
      className="w-screen h-screen flex transition-colors duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl mb-2">
          Test
        </div>

        <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "red" }}
        >
          RED
        </button>

        <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>

        <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
      </div>
    </div>
  </>
  );
}

export default App;

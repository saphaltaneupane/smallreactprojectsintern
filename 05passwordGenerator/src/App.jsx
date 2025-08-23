import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (numberAllowed) {
      str += '0123456789';
    }
    if (charAllowed) {
      str += '!@#$%^&*()_+{}[]<>?,.';
    }

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // Generate a password on first load or when options change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  // Copy password to clipboard
  const copyPasswordToClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  return (
    <>
      <h1 className="text-4xl text-center text-white my-3">Password Generator</h1>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-orange-500 text-white py-1 px-3 hover:bg-orange-600"
          >
            COPY
          </button>
        </div>

        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Include Numbers</label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={charAllowed}
              id="charInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput">Include Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import { useCallback, useEffect, useRef, useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { TiTick } from "react-icons/ti";

function App() {
  const [password, setPassword] = useState("");
  const [numbersAllowed, setNumebersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [passwordLenght, setPasswordLength] = useState(6);
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbersAllowed) str += "123456789";
    if (charactersAllowed) str += "~!@#$%^&*()_+`";

    for (let i = 0; i < passwordLenght; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    console.log(pass);
    setPassword(pass);
  }, [numbersAllowed, charactersAllowed, passwordLenght]);

  const copyToClipboard = () => {
    setCopied(true);
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  useEffect(() => {
    generatePassword();
  }, [numbersAllowed, charactersAllowed, passwordLenght]);

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Password Generator
        </h1>

        {/* <div className="relative mb-4"> */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            id="password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 pr-16 text-gray-700"
            placeholder="Generated password"
            value={password}
            ref={passwordRef}
            readOnly
          />
          <button
            onClick={copyToClipboard}
            onMouseLeave={() => setCopied(false)}
            id="copy-btn"
            // className="absolute right-2 top-2 bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 w-max"
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
          >
            {copied ? (
              <>
                <TiTick />
                Copied
              </>
            ) : (
              <>
                <MdContentCopy />
                Copy
              </>
            )}
          </button>
        </div>

        <div className="mb-4">
          <label
            htmlFor="length"
            className="block text-gray-700 font-medium mb-2"
          >
            Password Length
          </label>
          <input
            type="range"
            id="length"
            min="6"
            max="20"
            value={passwordLenght}
            className="w-full"
            onChange={(e) => setPasswordLength(e.target.value)}
          />
          <div className="text-center text-gray-600 mt-2">
            <span id="length-value">{passwordLenght}</span> characters
          </div>
        </div>

        <div className="mb-4">
          <label className="flex items-center space-x-2 text-gray-700">
            <input
              type="checkbox"
              id="include-numbers"
              className="form-checkbox h-5 w-5 text-blue-500"
              defaultChecked={false}
              onChange={() => setNumebersAllowed((prev) => !prev)}
            />
            <span>Include Numbers</span>
          </label>
        </div>
        <div className="mb-6">
          <label className="flex items-center space-x-2 text-gray-700">
            <input
              type="checkbox"
              id="include-characters"
              className="form-checkbox h-5 w-5 text-blue-500"
              defaultChecked={false}
              onChange={() => setCharactersAllowed((prev) => !prev)}
            />
            <span>Include Special Characters</span>
          </label>
        </div>

        {/* <button
          onClick={generatePassword}
          id="generate-btn"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
        >
          Generate Password
        </button> */}
      </div>
    </div>
  );
}

export default App;

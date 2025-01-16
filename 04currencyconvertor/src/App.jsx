import { useState } from "react";
import InputBox from "./Components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center border-gray-900 bg-gray-300 p-8 shadow-lg gap-4">
        <InputBox
          label="From"
          amount={amount}
          currencyType={from}
          currencyOptions={options}
          onAmountChange={(amount) => setAmount(amount)}
          onCurrencyChange={(currency) => setFrom(currency)}
        />
        <button
          onClick={swap}
          className="absolute z-10 -translate-y-1/2 rounded-lg bg-blue-600 px-4 py-2 text-white shadow-lg"
        >
          Swap
        </button>
        <InputBox
          label="To"
          amount={convertedAmount}
          currencyType={to}
          currencyOptions={options}
          onAmountChange={(amount) => setConvertedAmount(amount)}
          onCurrencyChange={(currency) => setTo(currency)}
        />
        <button
          className="w-full mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white"
          onClick={convert}
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default App;

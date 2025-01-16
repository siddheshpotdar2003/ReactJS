import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  currencyType,
  currencyOptions = [],
  onAmountChange,
  onCurrencyChange,
}) => {
  const amountId = useId();

  console.log(currencyType);
  // console.log(currencyOptions);

  return (
    <div className="grid w-max grid-cols-4 gap-4 rounded-lg bg-white p-8">
      <label htmlFor={amountId} className="col-span-3 text-gray-500">
        {label}
      </label>
      <label htmlFor="currency" className="place-self-end text-gray-500">
        CurrencyType
      </label>
      <input
        id={amountId}
        className="col-span-3 outline-none"
        type="number"
        value={amount}
        onChange={(e) =>
          onAmountChange && onAmountChange(Number(e.target.value))
        }
      />
      <select
        className="rounded bg-gray-100"
        value={currencyType}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
      >
        {currencyOptions.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputBox;

// import { useState } from "react";
import currency from "./assets/currency.json";
// import useCurrencyInfo from "./Hooks/useCurrencyInfo.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [To, setTo] = useState("INR");
  const [convertedAmm, setConvrtAmm] = useState(0);
  // const currencyInfoFrom = currency[from];
  // const optionsFrom = Object.keys(currencyInfoFrom);
  // const currencyInfoTo = currency[To];
  // const optionsTo = Object.keys(currencyInfoTo);

  const currencyInfoFrom = currency[from] || { rates: {} };
  const currencyInfoTo = currency[To] || { rates: {} };

  // Generate options from the keys of the currency object
  const options = Object.keys(currency.rates);
  const convert = () => {
    const ratesFrom = currencyInfoFrom.rates || {};
    const ratesTo = currencyInfoTo.rates || {};
    if (ratesFrom[from] || ratesTo[To]) {
      // Calculate conversion rate
      const conversionRate = ratesTo[To] / ratesFrom[from];
      // Perform conversion
      setConvrtAmm((amount * conversionRate).toFixed(2));
    } else {
      console.error("Conversion rate not found for", from, "or", To);
      setConvrtAmm("");
    }
  };
  return (
    <>
      <div className="container">
        <div className="card">
          <h2 className="display-2 text-dark">Currency Converter</h2>
          <div className="row">
            <div className="input-group col-md-3">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                id="amount"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="input-group col-md-3">
              <label htmlFor="converted"> Converted </label>
              <input
                type="number"
                id="convertedAmount"
                value={convertedAmm}
                readOnly
              />
            </div>
          </div>
          <div className="row">
            <div className="input-group col-md-2">
              <label htmlFor="from-currency" className="ml-1 form-label">
                From
              </label>
              <select
                className="form-select"
                value={from}
                placeholder={from}
                onChange={(e) => setFrom(e.target.value)}
              >
                {options.map((value) => (
                  <option key={value} value={value}>
                    {value.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-group col-md-2">
              <label htmlFor="to-currency" className="ml-1">
                To
              </label>
              <select
                className="form-select"
                value={To}
                placeholder={To}
                onChange={(e) => setTo(e.target.value)}
              >
                {options.map((value) => (
                  <option key={value} value={value}>
                    {value.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            className="button"
            onClick={() => {
              convert();
            }}
          >
            Convert
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

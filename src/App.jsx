import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import logo from "./assets/currency_converter_logo.svg";
import { FaExchangeAlt, FaInfoCircle } from "react-icons/fa";
import axios from "axios";

import CountrySelector from "./components/countrySelector";
import { switchCurrency } from "./features/currencies/currencySlice";

function App() {
  const dispatch = useDispatch();
  const { theme } = useSelector((store) => store.theme);
  const { fromCurrency, toCurrency, amount } = useSelector(
    (store) => store.currencies
  );
  const handleClick = async () => {
    try {
      const response = await axios.get(
        `https://api.exchangerate.host/convert?from=${fromCurrency.threeLetters}&to=${toCurrency.threeLetters}`
      );
      console.log(response.data.info.rate * amount);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSwitchCurrencies = async () => {
    dispatch(switchCurrency());
    if (fromCurrency.currency && toCurrency.currency && amount) {
      try {
        const response = await axios.get(
          `https://api.exchangerate.host/convert?from=${fromCurrency.threeLetters}&to=${toCurrency.threeLetters}`
        );
        console.log("switch currency", response.data.info.rate * amount);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className={`App ${theme === "dark" && "dark"}`}>
      <div
        className={`flex flex-col items-center bg-gradient-to-b from-cyan-500 to-blue-500 min-h-screen  dark:from-slate-700 dark:to-slate-900 dark:bg-gradient-to-b py-8`}
      >
        <header className="flex items-center gap-4 justify-center mb-8 dark:text-gray-100">
          <img
            src={logo}
            alt="Currecny Converter Logo"
            className="h-12 dark:bg-white dark:rounded-md dark:bg-opacity-30"
          />
          <span className="text-2xl font-bold uppercase">
            Currency Converter
          </span>
        </header>
        <div className="main shadow-[0_6px_8px_2px_rgba(0,0,0,0.2)] w-11/12 bg-white rounded-lg p-6 dark:shadow-[0_6px_8px_2px_rgba(250,250,250,0.6)] flex flex-col items-center gap-4 dark:bg-gray-600">
          <CountrySelector use={"Amount"} />
          <CountrySelector use={"From"} />
          <div
            className="rounded-full border border-solid border-gray-300 w-11 h-11 flex justify-center items-center cursor-pointer self-stretch dark:bg-gray-900 dark:text-white dark:border-gray-900"
            onClick={handleSwitchCurrencies}
          >
            <FaExchangeAlt className="text-blue-500 rotate-90 dark:text-gray-100" />
          </div>
          <CountrySelector use={"To"} />
          <button
            disabled={
              !fromCurrency.currency || !toCurrency.currency || !amount
                ? true
                : false
            }
            className={`bg-blue-600 rounded-lg h-12 p-3 flex w-full justify-center items-center shadow-sm cursor-pointer text-white text-2xl font-bold disabled:bg-blue-300 disabled:text-gray-400 dark:bg-gray-900 dark:disabled:bg-gray-700 dark:text-gray-100 dark:disabled:text-gray-500
      }`}
            onClick={handleClick}
          >
            Convert
          </button>
          <div className="flex gap-2 bg-blue-50 p-3 items-center rounded-lg dark:bg-gray-700 dark:text-gray-100">
            <FaInfoCircle className="text-xl w-1/12" />
            <div className="w-11/12 text-justify text-sm text-gray-500 dark:text-gray-100">
              We use the mid-market rate for our Converter. This is for
              informational purposes only. You won’t receive this rate when
              exchanging money.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import logo from "./assets/currency_converter_logo.svg";
import { FaExchangeAlt, FaInfoCircle } from "react-icons/fa";
import axios from "axios";

import CountrySelector from "./components/CountrySelector";
import CurrencyExchangeExamples from "./components/CurrencyExchangeExamples";
import ThemeSwitch from "./components/ThemeSwitch";
import DisplayResults from "./components/DisplayResults";
import {
  switchCurrency,
  setRate1,
  setRate2,
} from "./features/currencies/currencySlice";

function App() {
  const dispatch = useDispatch();
  const { fromCurrency, toCurrency, amount, rate1 } = useSelector(
    (store) => store.currencies
  );
  const handleClick = async () => {
    try {
      const response1 = await axios.get(
        `https://api.exchangerate.host/convert?from=${fromCurrency.threeLetters}&to=${toCurrency.threeLetters}`
      );
      dispatch(setRate1(response1.data.info.rate));
      const response2 = await axios.get(
        `https://api.exchangerate.host/convert?from=${toCurrency.threeLetters}&to=${fromCurrency.threeLetters}`
      );
      dispatch(setRate2(response2.data.info.rate));
    } catch (error) {
      console.log(error);
    }
  };
  const handleSwitchCurrencies = async () => {
    dispatch(switchCurrency());
  };

  return (
    <div className="App">
      <div
        className={`flex flex-col items-center bg-gradient-to-b from-cyan-500 to-blue-500 min-h-screen ease-in-out duration-200 dark:from-slate-700 dark:to-slate-900 dark:bg-gradient-to-b pt-4 pb-8`}
      >
        <header className="flex flex-col items-center ease-in-out duration-200 gap-4 justify-center mb-8 dark:text-gray-100 w-11/12 sm:w-9/12 lg:w-11/12 lg:mb-12">
          <ThemeSwitch />
          <div className="w-full flex justify-center gap-4 items-center">
            <img
              src={logo}
              alt="Currecny Converter Logo"
              className="h-12 md:h-16 lg:h-20 dark:bg-white ease-in-out duration-200 dark:rounded-md dark:bg-opacity-30"
            />
            <span className="text-2xl md:text-3xl lg:text-5xl font-bold uppercase">
              Currency Converter
            </span>
          </div>
        </header>
        <div className="main shadow-[0_6px_8px_2px_rgba(0,0,0,0.2)] w-11/12 bg-white rounded-lg p-6 dark:shadow-[0_6px_8px_2px_rgba(250,250,250,0.5)] flex flex-col items-center gap-4 dark:bg-gray-700 ease-in-out duration-200 sm:w-9/12 lg:w-11/12 mb-8">
          <div className="flex flex-col lg:flex-row w-full gap-4 lg:items-baseline">
            <CountrySelector use={"Amount"} />
            <CountrySelector use={"From"} />
            <div
              className="rounded-full border border-solid border-gray-300 w-12 h-12 flex justify-center items-center cursor-pointer ease-in-out duration-200 self-stretch flex-shrink-0 dark:bg-gray-900 dark:text-white dark:border-gray-900 lg:self-end"
              onClick={handleSwitchCurrencies}
            >
              <FaExchangeAlt className="text-blue-500 rotate-90 ease-in-out duration-200 dark:text-gray-100 lg:rotate-0" />
            </div>
            <CountrySelector use={"To"} />
          </div>

          <div className="flex flex-col gap-4 md:flex-row-reverse justify-between w-full">
            <button
              disabled={
                !fromCurrency.currency || !toCurrency.currency || !amount
                  ? true
                  : false
              }
              className={`bg-blue-600 rounded-lg h-12 p-3 flex w-full justify-center items-center shadow-sm cursor-pointer text-white text-2xl font-bold disabled:bg-blue-300 disabled:text-gray-400 dark:bg-gray-900 dark:disabled:bg-gray-800 dark:text-gray-100 ease-in-out duration-200 dark:disabled:text-gray-500 md:w-48 flex-shrink-0`}
              onClick={handleClick}
            >
              Convert
            </button>
            <div className="flex flex-col gap-4">
              {rate1 && <DisplayResults />}
              <div className="flex gap-2 bg-blue-50 p-3 items-center rounded-lg dark:bg-gray-900 ease-in-out duration-200 dark:text-gray-100">
                <FaInfoCircle className="text-xl w-1/12" />
                <div className="w-11/12 text-justify text-sm text-gray-500 dark:text-gray-100 ease-in-out duration-200">
                  We use the mid-market rate for our Converter. This is for
                  informational purposes only. You won’t receive this rate when
                  exchanging money.
                </div>
              </div>
            </div>
          </div>
        </div>
        {rate1 && (
          <div className="w-11/12 sm:w-9/12 lg:w-11/12 flex flex-col lg:flex-row gap-8">
            <CurrencyExchangeExamples use={"rate1"} />
            <CurrencyExchangeExamples use={"rate2"} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

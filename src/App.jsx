import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import logo from "./assets/currency_converter_logo.svg";
import { FaExchangeAlt } from "react-icons/fa";

import CountrySelector from "./components/countrySelector";

function App() {
  return (
    <div className="App flex flex-col items-center ">
      <header className="flex items-center gap-4 justify-center">
        <img
          src={logo}
          alt="Currecny Converter Logo"
          className="h-12 ml-4 mt-4 mb-4"
        />
        <span className="text-2xl font-bold">Currency Converter</span>
      </header>
      <div className="main shadow-[0_6px_8px_2px_rgba(0,0,0,0.2)] w-11/12 bg-white rounded-lg p-4">
        <div className="flex flex-col items-center gap-4">
          <CountrySelector use={"Amount"} />
          <CountrySelector use={"From"} />
          <div className="rounded-full border border-solid border-gray-300 w-11 h-11 flex justify-center items-center">
            <FaExchangeAlt className="text-blue-500 rotate-90" />
          </div>
          <CountrySelector use={"To"} />
        </div>
      </div>
    </div>
  );
}

export default App;

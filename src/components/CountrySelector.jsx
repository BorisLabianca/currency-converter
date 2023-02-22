import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import countries from "../assets/countries.json";
import {
  setFromCurrency,
  setToCurrency,
  setAmount,
  setRate1,
  setRate2,
} from "../features/currencies/currencySlice";

const CountrySelector = ({ use }) => {
  const dispatch = useDispatch();
  const { fromCurrency, toCurrency, amount, rate1 } = useSelector(
    (store) => store.currencies
  );
  const myDiv1Ref = useRef();
  const menu1Ref = useRef();
  const inputRef = useRef();
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !myDiv1Ref.current?.contains(event.target) &&
        !menu1Ref.current?.contains(event.target) &&
        !inputRef.current?.contains(event.target)
      ) {
        setOpen(false);
        setInputValue("");
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSelect = (country) => {
    if (use == "From") {
      if (
        Object.keys(country.currencies)[0].toLowerCase() !==
        fromCurrency.threeLetters
      ) {
        dispatch(
          setFromCurrency({
            flag: country.flags.svg,
            threeLetters: Object.keys(country.currencies)[0],
            currency:
              country.currencies[Object.keys(country.currencies)[0]].name,
            symbol:
              country.currencies[Object.keys(country.currencies)[0]].symbol,
          })
        );
      }
    } else if (use == "To") {
      if (
        Object.keys(country.currencies)[0].toLowerCase() !==
        toCurrency.threeLetters
      ) {
        dispatch(
          setToCurrency({
            flag: country.flags.svg,
            threeLetters: Object.keys(country.currencies)[0],
            currency:
              country.currencies[Object.keys(country.currencies)[0]].name,
            symbol:
              country.currencies[Object.keys(country.currencies)[0]].symbol,
          })
        );
      }
    }
    if (rate1) {
      dispatch(setRate1(""));
      dispatch(setRate2(""));
    }
    setInputValue("");
  };

  return (
    <div className="flex flex-col gap-2 relative w-full">
      <div className="font-bold dark:text-gray-100">{use}</div>
      {use === "Amount" ? (
        <div>
          <div className="border-solid border border-gray-300 rounded-lg h-12 p-3 flex w-full justify-between items-center shadow-sm bg-white ease-in-out duration-300 dark:bg-gray-900 dark:border-gray-900">
            <span className="dark:text-gray-100">
              {fromCurrency.currency && fromCurrency.symbol}
            </span>
            <input
              type="text"
              placeholder="Enter an amount"
              className="outline-none h-full w-11/12 bg-white ease-in-out duration-300 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-100"
              value={amount}
              onChange={(event) => {
                dispatch(setAmount(event.target.value));
              }}
            />
          </div>
        </div>
      ) : (
        <>
          <div
            className="border-solid border border-gray-300 rounded-lg h-12 p-3 flex w-full justify-between items-center shadow-sm cursor-pointer bg-white dark:bg-gray-900 ease-in-out duration-300 dark:text-gray-100 dark:border-gray-900"
            ref={myDiv1Ref}
            onClick={() => {
              setOpen(!open);
              inputRef.current.focus();
            }}
          >
            {use === "From" && fromCurrency.currency ? (
              <div className="flex items-center gap-2">
                <div className="w-6 border h-4">
                  <img
                    src={fromCurrency.flag}
                    alt={`${fromCurrency.currency} flag`}
                    className="object-cover"
                  />
                </div>
                <div>{`${fromCurrency.threeLetters} - ${
                  fromCurrency.currency.length > 20
                    ? fromCurrency.currency.substring(0, 20) + "..."
                    : fromCurrency.currency
                }`}</div>
              </div>
            ) : use === "To" && toCurrency.currency ? (
              <div className="flex items-center gap-2">
                <div className="w-6 border h-4">
                  <img
                    src={toCurrency.flag}
                    alt={`${toCurrency.currency} flag`}
                    className="object-cover"
                  />
                </div>
                <div>{`${toCurrency.threeLetters} - ${
                  toCurrency.currency.length > 20
                    ? toCurrency.currency.substring(0, 20) + "..."
                    : toCurrency.currency
                }`}</div>
              </div>
            ) : (
              <div className="text-gray-400 ease-in-out duration-300 dark:text-gray-100">
                Select a country
              </div>
            )}
            <FaChevronDown
              onClick={() => {
                setOpen(!open);
                inputRef.current.focus();
              }}
              className={`${open && "rotate-180"} ease-in-out duration-300`}
            />
          </div>
          <div
            className={`${
              open
                ? "max-h-60 bg-white rounded-lg w-full border dark:bg-gray-900 dark:text-gray-100 ease-in-out duration-300 dark:border-gray-900"
                : "max-h-0 w-full"
            } duration-300 absolute top-20 flex flex-col z-10 overflow-y-auto`}
          >
            <div
              className={`w-full h-10 flex items-center px-2 sticky top-0 bg-white dark:bg-gray-900 ease-in-out duration-300 dark:text-gray-100 mb-8`}
              ref={menu1Ref}
            >
              <FaSearch className="text-gray-400 ease-in-out duration-300 bg-white dark:bg-gray-900 dark:text-gray-100" />
              <input
                type="text"
                value={inputValue}
                onChange={(event) => {
                  setInputValue(event.target.value.toLowerCase());
                }}
                className="placeholder:text-gray-400 ease-in-out duration-300 w-full p-2 outline-none dark:bg-gray-900 dark:text-gray-100"
                placeholder={
                  use === "Amount" ? "Enter an amount" : "Enter a country name"
                }
                ref={inputRef}
              />
            </div>
            {countries
              .filter((country) => country.currencies)
              .map((country, index) => {
                return (
                  <div
                    key={index}
                    className={`p-3 text-sm hover:bg-sky-600 hover:text-white dark:hover:bg-gray-600 ease-in-out duration-300 dark:hover:text-gray-100 flex gap-2 cursor-pointer ${
                      country.name.common.toLowerCase().includes(inputValue) ||
                      country.currencies[
                        Object.keys(country.currencies)[0]
                      ].name
                        .toLowerCase()
                        .includes(inputValue) ||
                      Object.keys(country.currencies)[0]
                        .toLowerCase()
                        .includes(inputValue)
                        ? "block"
                        : "hidden"
                    } ${
                      use === "From" &&
                      fromCurrency.currency &&
                      Object.keys(country.currencies)[0].toLowerCase() ===
                        fromCurrency?.threeLetters.toLowerCase()
                        ? "bg-sky-600 text-white ease-in-out duration-300 dark:bg-gray-600 dark:text-gray-100"
                        : use === "To" &&
                          toCurrency.currency &&
                          Object.keys(country.currencies)[0].toLowerCase() ===
                            toCurrency?.threeLetters.toLowerCase() &&
                          "bg-sky-600 text-white ease-in-out duration-300 dark:bg-gray-600 dark:text-gray-100"
                    }`}
                    onClick={() => {
                      handleSelect(country);
                    }}
                  >
                    <div className="w-6 border h-4">
                      <img
                        src={country.flags.svg}
                        alt={`currency flag`}
                        className="object-cover"
                      />
                    </div>
                    <div>{`${Object.keys(country.currencies)[0]} - ${
                      country.currencies[Object.keys(country.currencies)[0]]
                        .name
                    }`}</div>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
};

export default CountrySelector;

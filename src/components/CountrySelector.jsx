import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import countries from "../assets/countries.json";

const CountrySelector = ({ use }) => {
  const myDiv1Ref = useRef();
  const menu1Ref = useRef();
  const inputRef = useRef();
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !myDiv1Ref.current.contains(event.target) &&
        !menu1Ref.current.contains(event.target) &&
        !inputRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2 relative">
      <div className="font-bold">{use}</div>
      {use === "Amount" ? (
        <div>
          <div className="border-solid border border-gray-300 rounded-lg h-12 p-3 flex w-72 justify-between items-center shadow-sm">
            <input
              type="text"
              placeholder="Enter an amount"
              className="outline-none w-full h-full"
            />
          </div>
        </div>
      ) : (
        <>
          <div
            className="border-solid border border-gray-300 rounded-lg h-12 p-3 flex w-72 justify-between items-center shadow-sm"
            ref={myDiv1Ref}
            onClick={() => {
              setOpen(!open);
            }}
          >
            {selected ? (
              <div className="flex items-center gap-2">
                <div className="w-6 border h-4">
                  <img
                    src={selected.flag}
                    alt={`${selected.name} flag`}
                    className="object-cover"
                  />
                </div>
                <div>{`${selected.threeLetters} - ${
                  selected.name.length > 20
                    ? selected.name.substring(0, 20) + "..."
                    : selected.name
                }`}</div>
              </div>
            ) : (
              <div className="text-gray-400">Select a country</div>
            )}

            <FaChevronDown
              onClick={() => {
                setOpen(!open);
              }}
              className={`${open && "rotate-180"} ease-in-out duration-300`}
            />
          </div>
          <div
            className={` ${
              open ? "max-h-60 bg-white rounded-lg w-full border" : "max-h-0"
            } duration-300 absolute top-20 flex flex-col z-10 overflow-y-auto `}
          >
            <div
              className={`w-full h-10 flex items-center px-2 sticky top-0 bg-white`}
              ref={menu1Ref}
            >
              <FaSearch className="text-gray-400 bg-white" />
              <input
                type="text"
                value={inputValue}
                onChange={(event) => {
                  setInputValue(event.target.value.toLowerCase());
                }}
                className="placeholder:text-gray-400 w-full p-2 outline-none"
                placeholder={
                  use === "Amount" ? "Enter an amount" : "Enter a country name"
                }
                ref={inputRef}
              />
            </div>
            {countries.map((country, index) => {
              return (
                <div
                  key={index}
                  className={`p-3 text-sm hover:bg-sky-600 hover:text-white flex gap-2 ${
                    country.name.common.toLowerCase().includes(inputValue)
                      ? "block"
                      : "hidden"
                  } ${
                    selected &&
                    country.name.common.toLowerCase() ===
                      selected?.name.toLowerCase() &&
                    "bg-sky-600 text-white"
                  }`}
                  onClick={() => {
                    if (country.name.common.toLowerCase() !== selected) {
                      setSelected({
                        flag: country.flags.png,
                        threeLetters: country.cca3,
                        name: country.name.common,
                      });
                    }
                  }}
                >
                  <div className="w-6 border h-4">
                    <img
                      src={country.flags.png}
                      alt={`${country.name.common} flag`}
                      className="object-cover"
                    />
                  </div>
                  <div>{`${country.cca3} - ${country.name.common}`}</div>
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

import { useDispatch } from "react-redux";
import { switchCurrency } from "../features/currencies/currencySlice";
import { FaExchangeAlt } from "react-icons/fa";

const SwitchButton = () => {
  const dispatch = useDispatch();
  const handleSwitchCurrencies = async () => {
    dispatch(switchCurrency());
  };
  return (
    <div
      className="rounded-full border border-solid border-gray-300 w-12 h-12 flex justify-center items-center cursor-pointer ease-in-out duration-200 self-stretch flex-shrink-0 dark:bg-gray-900 dark:text-white dark:border-gray-900 lg:self-end"
      onClick={handleSwitchCurrencies}
    >
      <FaExchangeAlt className="text-blue-500 rotate-90 ease-in-out duration-200 dark:text-gray-100 lg:rotate-0" />
    </div>
  );
};

export default SwitchButton;

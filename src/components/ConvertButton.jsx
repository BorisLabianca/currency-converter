import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setRate1, setRate2 } from "../features/currencies/currencySlice";
import { setLoading } from "../features/loading/loadingSlice";

const ConvertButton = () => {
  const dispatch = useDispatch();
  const { fromCurrency, toCurrency, amount } = useSelector(
    (store) => store.currencies
  );
  const { loading } = useSelector((store) => store.loading);
  const handleClick = async () => {
    dispatch(setLoading());
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
    dispatch(setLoading());
  };

  return (
    <button
      disabled={
        !fromCurrency.currency || !toCurrency.currency || !amount || loading
          ? true
          : false
      }
      className={`bg-blue-600 rounded-lg h-12 p-3 flex w-full justify-center items-center shadow-sm cursor-pointer text-white text-2xl font-bold disabled:bg-blue-300 disabled:text-gray-400 dark:bg-gray-900 dark:disabled:bg-gray-800 dark:text-gray-100 ease-in-out duration-200 dark:disabled:text-gray-500 md:w-48 flex-shrink-0 disabled:cursor-not-allowed`}
      onClick={handleClick}
    >
      Convert
    </button>
  );
};

export default ConvertButton;

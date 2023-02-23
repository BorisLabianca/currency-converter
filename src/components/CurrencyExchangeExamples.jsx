import { useSelector } from "react-redux";

const CurrencyExchangeExamples = ({ use }) => {
  const { rate1, rate2, fromCurrency, toCurrency } = useSelector(
    (store) => store.currencies
  );
  return (
    <div className="shadow-[0_6px_8px_2px_rgba(0,0,0,0.2)] w-full bg-white rounded-lg dark:shadow-[0_6px_8px_2px_rgba(250,250,250,0.5)] flex flex-col items-center dark:bg-gray-700 ease-in-out duration-200 justify-center">
      <div className="bg-gray-100 w-full flex flex-col justify-center items-center rounded-t-lg p-3 gap-3 ease-in-out duration-200 dark:bg-gray-900 dark:text-gray-100">
        <div className="text-xl font-bold w-11/12 flex justify-center text-center">{`Convert ${
          use === "rate1" ? fromCurrency.currency : toCurrency.currency
        } to ${
          use === "rate1" ? toCurrency.currency : fromCurrency.currency
        }`}</div>
        <div className="flex justify-between w-11/12">
          <div className="flex items-center justify-center gap-2">
            <div className="w-6 border h-4">
              <img
                src={use === "rate1" ? fromCurrency.flag : toCurrency.flag}
                alt={`${
                  use === "rate1" ? fromCurrency.currency : toCurrency.currency
                } flag`}
                className="object-cover"
              />
            </div>
            <div>
              {use === "rate1"
                ? fromCurrency.threeLetters
                : toCurrency.threeLetters}
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-6 border h-4">
              <img
                src={use === "rate1" ? toCurrency.flag : fromCurrency.flag}
                alt={`${
                  use === "rate1" ? toCurrency.currency : fromCurrency.currency
                } flag`}
                className="object-cover"
              />
            </div>
            <div>
              {use === "rate1"
                ? toCurrency.threeLetters
                : fromCurrency.threeLetters}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-3 w-11/12">
        <div className="flex justify-center text-blue-700 ease-in-out duration-200 dark:text-gray-300">{`${Intl.NumberFormat(
          "en-US"
        ).format(1)} ${
          use === "rate1" ? fromCurrency.threeLetters : toCurrency.threeLetters
        }`}</div>
        <div className="flex justify-center ease-in-out duration-200 dark:text-gray-300">{`${Intl.NumberFormat(
          "en-US"
        ).format(1 * (use === "rate1" ? rate1 : rate2))} ${
          use === "rate1" ? toCurrency.threeLetters : fromCurrency.threeLetters
        }`}</div>
      </div>
      <div className="flex justify-between p-3 w-11/12">
        <div className="flex justify-center  text-blue-700 ease-in-out duration-200 dark:text-gray-300">{`${Intl.NumberFormat(
          "en-US"
        ).format(5)} ${
          use === "rate1" ? fromCurrency.threeLetters : toCurrency.threeLetters
        }`}</div>
        <div className="flex justify-center ease-in-out duration-200 dark:text-gray-300">{`${Intl.NumberFormat(
          "en-US"
        ).format(5 * (use === "rate1" ? rate1 : rate2))} ${
          use === "rate1" ? toCurrency.threeLetters : fromCurrency.threeLetters
        }`}</div>
      </div>
      <div className="flex justify-between p-3 w-11/12">
        <div className="flex justify-center text-blue-700 ease-in-out duration-200 dark:text-gray-300">{`${Intl.NumberFormat(
          "en-US"
        ).format(10)} ${
          use === "rate1" ? fromCurrency.threeLetters : toCurrency.threeLetters
        }`}</div>
        <div className="flex justify-center ease-in-out duration-200 dark:text-gray-300">{`${Intl.NumberFormat(
          "en-US"
        ).format(10 * (use === "rate1" ? rate1 : rate2))} ${
          use === "rate1" ? toCurrency.threeLetters : fromCurrency.threeLetters
        }`}</div>
      </div>
      <div className="flex justify-between p-3 w-11/12">
        <div className="flex justify-center text-blue-700 ease-in-out duration-200 dark:text-gray-300">{`${Intl.NumberFormat(
          "en-US"
        ).format(25)} ${
          use === "rate1" ? fromCurrency.threeLetters : toCurrency.threeLetters
        }`}</div>
        <div className="flex justify-center ease-in-out duration-200 dark:text-gray-300">{`${Intl.NumberFormat(
          "en-US"
        ).format(25 * (use === "rate1" ? rate1 : rate2))} ${
          use === "rate1" ? toCurrency.threeLetters : fromCurrency.threeLetters
        }`}</div>
      </div>
      <div className="flex justify-between p-3 w-11/12">
        <div className="flex justify-center text-blue-700 ease-in-out duration-200 dark:text-gray-300">{`${Intl.NumberFormat(
          "en-US"
        ).format(50)} ${
          use === "rate1" ? fromCurrency.threeLetters : toCurrency.threeLetters
        }`}</div>
        <div className="flex justify-center ease-in-out duration-200 dark:text-gray-300">{`${Intl.NumberFormat(
          "en-US"
        ).format(50 * (use === "rate1" ? rate1 : rate2))} ${
          use === "rate1" ? toCurrency.threeLetters : fromCurrency.threeLetters
        }`}</div>
      </div>
      <div className="flex justify-between p-3 w-11/12">
        <div className="flex justify-center text-blue-700 ease-in-out duration-200 dark:text-gray-300">{`${Intl.NumberFormat(
          "en-US"
        ).format(100)} ${
          use === "rate1" ? fromCurrency.threeLetters : toCurrency.threeLetters
        }`}</div>
        <div className="flex justify-center ease-in-out duration-200 dark:text-gray-300">{`${Intl.NumberFormat(
          "en-US"
        ).format(100 * (use === "rate1" ? rate1 : rate2))} ${
          use === "rate1" ? toCurrency.threeLetters : fromCurrency.threeLetters
        }`}</div>
      </div>
      <div className="flex justify-between p-3 w-11/12">
        <div className="flex justify-center text-blue-700 ease-in-out duration-200 dark:text-gray-300">{`${Intl.NumberFormat(
          "en-US"
        ).format(500)} ${
          use === "rate1" ? fromCurrency.threeLetters : toCurrency.threeLetters
        }`}</div>
        <div className="flex justify-center ease-in-out duration-200 dark:text-gray-300">{`${Intl.NumberFormat(
          "en-US"
        ).format(500 * (use === "rate1" ? rate1 : rate2))} ${
          use === "rate1" ? toCurrency.threeLetters : fromCurrency.threeLetters
        }`}</div>
      </div>
      <div className="flex justify-between p-3 w-11/12">
        <div className="flex justify-center text-blue-700 ease-in-out duration-200 dark:text-gray-300">{`${Intl.NumberFormat(
          "en-US"
        ).format(1000)} ${
          use === "rate1" ? fromCurrency.threeLetters : toCurrency.threeLetters
        }`}</div>
        <div className="flex justify-center ease-in-out duration-200 dark:text-gray-300">{`${Intl.NumberFormat(
          "en-US"
        ).format(1000 * (use === "rate1" ? rate1 : rate2))} ${
          use === "rate1" ? toCurrency.threeLetters : fromCurrency.threeLetters
        }`}</div>
      </div>
      <div className="flex justify-between p-3 w-11/12">
        <div className="flex justify-center text-blue-700 ease-in-out duration-200 dark:text-gray-300">{`${Intl.NumberFormat(
          "en-US"
        ).format(5000)} ${
          use === "rate1" ? fromCurrency.threeLetters : toCurrency.threeLetters
        }`}</div>
        <div className="flex justify-center ease-in-out duration-200 dark:text-gray-300">{`${Intl.NumberFormat(
          "en-US"
        ).format(5000 * (use === "rate1" ? rate1 : rate2))} ${
          use === "rate1" ? toCurrency.threeLetters : fromCurrency.threeLetters
        }`}</div>
      </div>
      <div className="flex justify-between p-3 w-11/12">
        <div className="flex justify-center text-blue-700 ease-in-out duration-200 dark:text-gray-300">{`${Intl.NumberFormat(
          "en-US"
        ).format(10000)} ${
          use === "rate1" ? fromCurrency.threeLetters : toCurrency.threeLetters
        }`}</div>
        <div className="flex justify-center ease-in-out duration-200 dark:text-gray-300">{`${Intl.NumberFormat(
          "en-US"
        ).format(10000 * (use === "rate1" ? rate1 : rate2))} ${
          use === "rate1" ? toCurrency.threeLetters : fromCurrency.threeLetters
        }`}</div>
      </div>
      <div className="flex justify-between p-3 w-11/12">
        <div className="flex justify-center text-blue-700 ease-in-out duration-200 dark:text-gray-300">{`${Intl.NumberFormat(
          "en-US"
        ).format(50000)} ${
          use === "rate1" ? fromCurrency.threeLetters : toCurrency.threeLetters
        }`}</div>
        <div className="flex justify-center ease-in-out duration-200 dark:text-gray-300">{`${Intl.NumberFormat(
          "en-US"
        ).format(50000 * (use === "rate1" ? rate1 : rate2))} ${
          use === "rate1" ? toCurrency.threeLetters : fromCurrency.threeLetters
        }`}</div>
      </div>
    </div>
  );
};

export default CurrencyExchangeExamples;

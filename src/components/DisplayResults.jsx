import { useSelector } from "react-redux";

const DisplayResults = () => {
  const { amount, fromCurrency, toCurrency, rate1, rate2 } = useSelector(
    (store) => store.currencies
  );
  return (
    <div className="flex flex-col gap-2 dark:text-gray-100">
      <div>{`${Intl.NumberFormat("en-US").format(amount)} ${
        fromCurrency.currency
      } =`}</div>
      <div className="text-3xl font-bold">{`${Intl.NumberFormat("en-US").format(
        amount * rate1
      )} ${toCurrency.currency}`}</div>
      <div className="text-sm">{`1 ${fromCurrency.threeLetters} = ${rate1} ${toCurrency.threeLetters}`}</div>
      <div className="text-sm">{`1 ${toCurrency.threeLetters} = ${rate2} ${fromCurrency.threeLetters}`}</div>
    </div>
  );
};

export default DisplayResults;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: "",
  fromCurrency: {
    flag: "",
    threeLetters: "",
    currency: "",
    symbol: "",
  },
  toCurrency: {
    flag: "",
    threeLetters: "",
    currency: "",
    symbol: "",
  },
};

const currencySlice = createSlice({
  name: "currencies",
  initialState: initialState,
  reducers: {
    setAmount: (state, action) => {
      const { payload } = action;
      state.amount = payload;
    },
    setFromCurrency: (state, action) => {
      const { payload } = action;
      const newCurrency = { ...state.fromCurrency };
      newCurrency.flag = payload.flag;
      newCurrency.threeLetters = payload.threeLetters;
      newCurrency.currency = payload.currency;
      newCurrency.symbol = payload.symbol;
      state.fromCurrency = newCurrency;
    },
    setToCurrency: (state, action) => {
      const { payload } = action;
      const newCurrency = { ...state.toCurrency };
      newCurrency.flag = payload.flag;
      newCurrency.threeLetters = payload.threeLetters;
      newCurrency.currency = payload.currency;
      newCurrency.symbol = payload.symbol;
      state.toCurrency = newCurrency;
    },
    switchCurrency: (state) => {
      const newFromCurrency = { ...state.fromCurrency };
      const newToCurrency = { ...state.toCurrency };
      state.fromCurrency = newToCurrency;
      state.toCurrency = newFromCurrency;
    },
  },
});

export const { setAmount, setFromCurrency, setToCurrency, switchCurrency } =
  currencySlice.actions;
export default currencySlice.reducer;

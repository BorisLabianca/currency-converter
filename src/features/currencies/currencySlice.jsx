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
  rate1: "",
  rate2: "",
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
    setRate1: (state, action) => {
      const { payload } = action;
      state.rate1 = payload;
    },
    setRate2: (state, action) => {
      const { payload } = action;
      state.rate2 = payload;
    },
    switchCurrency: (state) => {
      const newFromCurrency = { ...state.fromCurrency };
      const newToCurrency = { ...state.toCurrency };
      const newRate1 = state.rate1;
      const newRate2 = state.rate2;
      state.fromCurrency = newToCurrency;
      state.toCurrency = newFromCurrency;
      state.rate1 = newRate2;
      state.rate2 = newRate1;
    },
  },
});

export const {
  setAmount,
  setFromCurrency,
  setToCurrency,
  switchCurrency,
  setRate1,
  setRate2,
} = currencySlice.actions;
export default currencySlice.reducer;

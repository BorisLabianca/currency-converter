import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./currencies/currencySlice";
import themeReducer from "./theme/themeSlice";

const store = configureStore({
  reducer: { currencies: currencyReducer, theme: themeReducer },
});

export default store;

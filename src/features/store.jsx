import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./currencies/currencySlice";
import themeReducer from "./theme/themeSlice";
import loadingReducer from "./loading/loadingSlice";

const store = configureStore({
  reducer: {
    currencies: currencyReducer,
    theme: themeReducer,
    loading: loadingReducer,
  },
});

export default store;

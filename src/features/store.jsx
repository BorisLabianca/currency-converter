import { configureStore } from "@reduxjs/toolkit";
import dropdownReducer from "./dropdown/dropdownSlice";

const store = configureStore({
  reducer: {
    dropdown: dropdownReducer,
  },
});

export default store;

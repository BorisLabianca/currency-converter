import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open1: false,
};

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState: initialState,
  reducers: {
    toggleDropdown: (state, action) => {
      const { payload } = action;
      console.log(payload);
      if (payload === true) state.open1 = !state.open1;
      else if (payload === false) state.open1 = false;
    },
  },
});

export const { toggleDropdown } = dropdownSlice.actions;
export default dropdownSlice.reducer;

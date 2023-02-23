import { createSlice } from "@reduxjs/toolkit";
const getTheme = () => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  } else {
    return "system";
  }
};
const initialState = {
  theme: getTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    switchTheme: (state, action) => {
      const { payload } = action;
      state.theme = payload;
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;

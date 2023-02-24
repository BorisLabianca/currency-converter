import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state) => {
      if (state.loading === false) state.loading = true;
      else state.loading = false;
    },
  },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const toggleDarkSlice = createSlice({
  name: "toggleDark",
  initialState: {
    isDark: false,
  },
  reducers: {
    toggleDark: (state, action) => {
      state.isDark = !state.isDark
    },
  },
});

export const { toggleDark } = toggleDarkSlice.actions;
export default toggleDarkSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const toggleThemeSlice = createSlice({
  name: "toggle",
  initialState: {
    theme: "light",
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

export const { toggleTheme } = toggleThemeSlice.actions;
export default toggleThemeSlice.reducer;

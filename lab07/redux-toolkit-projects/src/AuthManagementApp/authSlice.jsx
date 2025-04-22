import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: "",
    isLoggedIn: false,
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = {};
    },
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, setUserInfo } = authSlice.actions;
export default authSlice.reducer;

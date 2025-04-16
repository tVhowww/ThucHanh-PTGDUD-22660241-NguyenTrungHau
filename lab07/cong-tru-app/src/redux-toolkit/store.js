import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux-toolkit/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

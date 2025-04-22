import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../CounterApp/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

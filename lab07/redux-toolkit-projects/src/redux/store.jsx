import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../CounterApp/counterSlice";
import todoListSlice from "../TodoListApp/todoListSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: todoListSlice,
  },
});

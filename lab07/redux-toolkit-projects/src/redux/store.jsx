import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../CounterApp/counterSlice";
import todoListSlice from "../TodoListApp/todoListSlice";
import toggleThemeSlice from "../ToggleThemeApp/toggleThemeSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: todoListSlice,
    toggle: toggleThemeSlice,
  },
});

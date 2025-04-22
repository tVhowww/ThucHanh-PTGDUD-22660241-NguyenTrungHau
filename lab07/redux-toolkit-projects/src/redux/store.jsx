import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../CounterApp/counterSlice";
import todoListSlice from "../TodoListApp/todoListSlice";
import toggleThemeSlice from "../ToggleThemeApp/toggleThemeSlice";
import cartSlice from "../CartManagementApp/cartSlice";
import authSlice from "../AuthManagementApp/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: todoListSlice,
    toggle: toggleThemeSlice,
    cart: cartSlice,
    auth: authSlice,
  },
});

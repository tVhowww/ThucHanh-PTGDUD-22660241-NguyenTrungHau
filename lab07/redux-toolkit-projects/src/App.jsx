import { useState } from "react";
import "./App.css";
import Counter from "./CounterApp/components/Counter";
import TodoList from "./TodoListApp/components/TodoList";
import ToggleTheme from "./ToggleThemeApp/components/ToggleTheme";
import Cart from "./CartManagementApp/components/Cart";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <TodoList /> */}
      <ToggleTheme />
      {/* <Cart /> */}
    </>
  );
}

export default App;

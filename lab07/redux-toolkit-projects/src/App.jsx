import { useState } from "react";
import "./App.css";
import Counter from "./CounterApp/components/Counter";
import TodoList from "./TodoListApp/components/TodoList";
import ToggleTheme from "./ToggleThemeApp/components/ToggleTheme";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <TodoList /> */}
      <ToggleTheme />
    </>
  );
}

export default App;

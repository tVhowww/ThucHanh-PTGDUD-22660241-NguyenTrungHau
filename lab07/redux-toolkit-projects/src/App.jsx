import { useState } from "react";
import "./App.css";
import Counter from "./CounterApp/components/Counter";
import TodoList from "./TodoListApp/components/TodoList";
import ToggleTheme from "./ToggleThemeApp/components/ToggleTheme";
import Cart from "./CartManagementApp/components/Cart";
import Auth from "./AuthManagementApp/components/Auth";
import useRouteElements from "./routes/useRouteElements";

function App() {
  const element = useRouteElements();
  return <>{element}</>;
}

export default App;

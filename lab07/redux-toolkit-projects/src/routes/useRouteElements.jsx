import React from "react";
import { useRoutes } from "react-router-dom";
import Counter from "../CounterApp/components/Counter";
import TodoList from "../TodoListApp/components/TodoList";
import ToggleTheme from "../ToggleThemeApp/components/ToggleTheme";
import Cart from "../CartManagementApp/components/Cart";
import Auth from "../AuthManagementApp/components/Auth";
import MenuFeatures from "../MenuFeatures/MenuFeatures";

export default function useRouteElements() {
  let element = useRoutes([
    {
      path: "/",
      element: <MenuFeatures />,
      children: [
        {
          path: "counter",
          element: <Counter />,
        },
        {
          path: "to-do-list",
          element: <TodoList />,
        },
        {
          path: "toggle-theme",
          element: <ToggleTheme />,
        },
        {
          path: "cart-management",
          element: <Cart />,
        },
        {
          path: "auth-management",
          element: <Auth />,
        },
      ],
    },
  ]);
  return element;
}

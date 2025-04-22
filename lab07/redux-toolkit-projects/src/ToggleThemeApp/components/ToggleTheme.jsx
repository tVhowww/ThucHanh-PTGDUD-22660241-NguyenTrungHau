import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../toggleThemeSlice";

function ToggleTheme() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.toggle.theme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      className={`flex flex-col gap-4 items-center border rounded-xl shadow-xl p-20 ${
        theme === "dark" ? "!bg-gray-800" : "!bg-white"
      }`}
    >
      <h1 className={`${theme === "dark" ? "text-white" : ""}`}>
        Toggle Theme App
      </h1>
      <span className={`${theme === "dark" ? "text-white" : "text-gray-700"}`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad id deleniti
        a obcaecati distinctio ut eaque nisi perferendis asperiores provident!
        Repellendus nobis exercitationem error ullam quam consequuntur eligendi
        delectus eaque. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Cum, ex nam. Quae velit totam, ab odio ratione consectetur omnis
        tempore. In sapiente cum impedit ullam obcaecati iure, placeat eius rem.
      </span>
      <button
        className="px-4 py-2 !border-green-400 !bg-green-400 hover:!bg-green-600 outline-none
    text-white"
        onClick={handleToggleTheme}
      >
        Toggle theme
      </button>
    </div>
  );
}

export default ToggleTheme;

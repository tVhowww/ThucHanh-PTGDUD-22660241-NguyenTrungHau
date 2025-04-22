import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, setUserInfo } from "../authSlice";

function Auth() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const [name, setName] = useState("");

  const handleLogin = () => {
    dispatch(login());
    dispatch(setUserInfo({ name }));
  };

  const handleLogout = () => {
    dispatch(logout());
    setName("");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="flex flex-col gap-10 items-center border rounded-xl p-20 shadow-xl">
      <h1>Auth Management App</h1>
      <span
        className={`text-2xl font-bold ${
          isLoggedIn ? "text-green-500" : "text-blue-500"
        }`}
      >
        {isLoggedIn
          ? `Welcome to our shop! ${user.name}`
          : `Please login to shopping!`}
      </span>
      {isLoggedIn ? (
        ""
      ) : (
        <div className="flex gap-2">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            className="border"
            type="text"
            value={name}
            onChange={handleChange}
          />
        </div>
      )}
      {isLoggedIn ? (
        <button
          className="!border-red-400 !bg-red-200 py-2 px-4 transition hover:!bg-red-500 outline-none"
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <button
          className="!border-blue-400 !bg-blue-200 py-2 px-4 transition hover:!bg-blue-500 outline-none"
          onClick={handleLogin}
        >
          Login
        </button>
      )}
    </div>
  );
}

export default Auth;

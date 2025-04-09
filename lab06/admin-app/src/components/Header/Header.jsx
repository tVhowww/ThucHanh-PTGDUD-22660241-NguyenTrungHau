import React from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const getTitleFromPath = (path) => {
    switch (path) {
      case "/dashboard":
        return "Dashboard";
      case "/projects":
        return "Projects";
      case "/teams":
        return "Teams";
      case "/analytics":
        return "Analytics";
      case "/messages":
        return "Messages";
      case "/integrations":
        return "Integrations";
      default:
        return "";
    }
  };
  const title = getTitleFromPath(location.pathname);

  return (
    <div className="flex justify-between items-center px-4 py-3 border-b-1 !border-gray-200">
      <span className="text-2xl font-extrabold text-[#f44b87]">{title}</span>
      <div className="flex items-start justify-evenly gap-4">
        <div className="relative rounded-md !bg-gray-100">
          <input
            type="search"
            placeholder="Search..."
            className="px-5 py-2 outline-none"
          />
          <img
            src="../src/assets/imgs/Search.png"
            alt="search"
            className="absolute top-3 left-3"
          />
        </div>
        <div className="flex items-start gap-4">
          <img
            width={"24px"}
            src="../src/assets/imgs/bell.png"
            alt="bell"
            className="cursor-pointer"
          />
          <img
            width={"24px"}
            src="../src/assets/imgs/question.png"
            alt="question"
            className="cursor-pointer"
          />
        </div>
        <div className="cursor-pointer">
          <img src="../src/assets/imgs/avatar-user.png" alt="user-avt" />
        </div>
      </div>
    </div>
  );
}

export default Header;

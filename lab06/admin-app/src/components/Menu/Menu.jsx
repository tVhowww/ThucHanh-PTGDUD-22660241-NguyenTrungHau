import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await import("../../data/data.json");
        setMenu(res.default.menu);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-start w-full">
      {/* Logo */}
      <Link to="/" className="px-4 py-2 mb-3 cursor-pointer">
        <img src="../src/assets/imgs/logo.png" alt="logo" />
      </Link>

      {/* Menu */}
      <div className="flex flex-col items-start px-4 mb-30 w-full">
        {menu.map((item) => {
          return (
            <NavLink
              to={item.path}
              key={item.id}
              className={({ isActive }) =>
                `group flex items-center gap-2 mb-1 w-full px-3 py-2 rounded-md 
                    hover:bg-[#f44b87] hover:text-white cursor-pointer 
                    ${isActive ? "bg-[#f44b87] text-white" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src={item.icon}
                    alt={item.title}
                    className={`transition-all duration-300 filter 
              ${isActive ? "brightness-0 invert" : ""} 
              group-hover:brightness-0 group-hover:invert`}
                  />
                  <span className="text-sm">{item.title}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center gap-2 mx-4 mb-4 p-4 !bg-blue-50 rounded-md">
        <div>
          <img src="../src/assets/imgs/menu-group-img.png" alt="footer-menu" />
        </div>
        <span className="text-xl font-bold ">V2.0 is available</span>
        <button className="rounded-md border-1 !border-blue-600 !text-blue-600 !bg-white px-4 py-2 w-full cursor-pointer !hover:bg-blue-300">
          Try now
        </button>
      </div>
    </div>
  );
}

export default Menu;

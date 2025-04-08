import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
    <div className="flex flex-col items-start px-4">
      {menu.map((item) => {
        return (
          <NavLink
            to={item.path}
            key={item.id}
            className={({ isActive }) =>
              `group flex items-center gap-2 mb-1 w-[250px] px-4 py-2 rounded-md 
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
  );
}

export default Menu;

import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

function MenuFeatures() {
  const features = [
    { title: "Counter App", path: "/counter" },
    { title: "Todo-list App", path: "/to-do-list" },
    { title: "Toggle Theme App", path: "/toggle-theme" },
    { title: "Cart Management App", path: "/cart-management" },
    { title: "Auth Management App", path: "/auth-management" },
  ];

  const navigation = useNavigate();
  return (
    <div>
      <h1>Menu Features</h1>
      <div className="grid grid-cols-5 gap-2">
        {features.map((item) => {
          return (
            <div
              key={item.title}
              className="px-4 py-8 border rounded-md !bg-gray-300 hover:!bg-green-200 transition"
              onClick={() => navigation(item.path)}
            >
              <span className="text-xl font-semibold text-black">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  );
}

export default MenuFeatures;

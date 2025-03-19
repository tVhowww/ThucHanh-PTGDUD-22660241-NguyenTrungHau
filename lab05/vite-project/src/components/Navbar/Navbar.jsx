import { useState, useEffect } from "react";

export default function Navbar() {
  var menu = [
    "What to cook",
    "Recipes",
    "Ingredients",
    "Occasions",
    "About us",
  ];

  // const [array, setArray] = useState([]);

  // useEffect(() => {
  //   var fn = fetch("https://67c79445c19eb8753e7a176f.mockapi.io/menus");
  //   var fn1 = fn.then((res) => res.json());
  //   var fn2 = fn1.then((data) => {
  //     setArray(data);
  //   });
  // }, []);
  return (
    <div>
      <nav className="bg-white shadow-sm">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            className="flex items-center space-x-3 rtl:space-x-reverse"
            href="#"
          >
            <img
              src="../src/assets/imgs/logo.png"
              alt="Logo"
              style={{ width: "100px" }}
            />
          </a>

          <form className="flex mx-auto">
            <div className="search-box flex items-center">
              <i className="bi bi-search me-2"></i>
              <input
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
            </div>
          </form>

          <div className="hidden w-full md:block md:w-auto ">
            <ul className="font-medium flex flex-col p-4 mx-4 md:p-0 md:flex-row md:space-x-8 ">
              {menu.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className="block py-2 px-3 text-gray-900 md:p-0 md:bg-transparent "
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex items-center">
            <button
              // className="rounded-4 py-2 px-3 font-semibold bg-[#d63384]"
              className="recipe-box"
            >
              📋 Your Recipe Box
            </button>
            <a href="#">
              <img
                src="../src/assets/imgs/avatar.jpg"
                alt="User"
                className="profile-img "
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

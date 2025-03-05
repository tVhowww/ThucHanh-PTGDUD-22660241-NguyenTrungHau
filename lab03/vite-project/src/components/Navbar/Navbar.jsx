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
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="../src/assets/imgs/logo.png"
              alt="Logo"
              style={{ width: "100px" }}
            />
          </a>

          <form className="d-flex mx-auto">
            <div className="search-box d-flex align-items-center">
              <i className="bi bi-search me-2"></i>
              <input
                className="form-control border-0 bg-transparent"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </form>

          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav">
              {menu.map((item, index) => {
                return (
                  <li key={index} className="nav-item">
                    <a className="nav-link" href="#">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <button className="recipe-box border-0">📋 Your Recipe Box</button>
            <a href="#">
              <img
                src="../src/assets/imgs/avatar.jpg"
                alt="User"
                className="profile-img ms-3"
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

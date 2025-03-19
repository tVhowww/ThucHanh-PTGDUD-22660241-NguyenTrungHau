import { useEffect, useState } from "react";
import "./App.css";
import "./assets/css/style.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  // 1. Fetching data from an API
  // const [userList, setUserList] = useState([]);

  // const fetchData = async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const data = await response.json();
  //   setUserList(data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // 2. Lab

  return (
    <>
      {/* 1.  */}
      {/* <div className="user-list container row">
        {userList.map((user) => (
          <div
            key={user.id}
            className="user-item d-flex flex-column align-items-start col-5 p-3 m-3 bg-primary text-white"
          >
            <h3>Name: {user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
      </div> */}
      {/* 2.  */}
      <Navbar />
      {/* breadcrumb */}
      <div>
        <nav className="">
          <ol className="breadcrumb flex items-center justify-start">
            <li className="breadcrumb-item">
              <a href="#">Recipes</a>
            </li>
            <p className="mx-2"> > </p>
            <li className="breadcrumb-item active" aria-current="page">
              Subscribe
            </li>
          </ol>
        </nav>
      </div>

      {/* content */}
      <div className="flex items-start justify-evenly my-6">
        <div className="left">
          <div className="first-title">
            This recipe is exclusively available to subscribers
          </div>
          <div className="second-title">
            Join now to accesss effortless, hassle-free recipes
          </div>
          <div className="desc">
            <div className="desc-item">
              <span>icon</span>
              <p>20,000+ recipes to suit all tastes and skill levels</p>
            </div>
            <div className="desc-item">
              <span>icon</span>
              <p>20,000+ recipes to suit all tastes and skill levels</p>
            </div>
            <div className="desc-item">
              <span>icon</span>
              <p>20,000+ recipes to suit all tastes and skill levels</p>
            </div>
            <div className="desc-item">
              <span>icon</span>
              <p>20,000+ recipes to suit all tastes and skill levels</p>
            </div>
          </div>
          <div className="price">0.25USD / Week</div>
          <p>Billed as $1 every 4 weeks for the first year</p>
          <button>Subscribe now</button>
          <p>Cancel or Pause anytime</p>
        </div>
        <div className="right">
          <img src="../src/assets/imgs/food.png" alt="food" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;

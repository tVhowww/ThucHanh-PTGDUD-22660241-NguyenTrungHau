import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h5 className="text-xl font-semibold mb-4">About Us</h5>
              <p className="mb-4">
                Welcome to our website, a wonderful place to explore and learn
                how to cook like a pro.
              </p>
              <div className="flex items-center">
                <input
                  type="email"
                  className="flex-1 p-2 rounded-l-md focus:outline-none"
                  placeholder="Enter your email"
                />
                <button className="btn-pink bg-[#e9638e] text-white p-2 rounded-r-md">
                  Send
                </button>
              </div>
            </div>

            <div>
              <h5 className="text-xl font-semibold mb-4">Learn More</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Our Cooks
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    See Our Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-xl font-semibold mb-4">Shop</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Gift Subscription
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Send Us Feedback
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-xl font-semibold mb-4">Recipes</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    What to Cook This Week
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Pasta
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Dinner
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Healthy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Vegetarian
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Vegan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Christmas
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between items-center mt-10">
            <img
              src="../src/assets/imgs/logo.png"
              alt="Chefify Logo"
              className="w-24"
            />
            <p className="mb-0">2023 Chefify Company</p>
            <p className="mb-0">
              <a href="#" className="hover:underline">
                Terms of Service
              </a>{" "}
              |
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

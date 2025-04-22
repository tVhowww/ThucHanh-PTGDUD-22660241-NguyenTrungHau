import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../cartSlice";
import CartItem from "./CartItem";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const productSample = {
    title: "React xào redux",
    price: "5.000.000",
  };

  const total = cartItems.reduce((sum, item) => {
    return sum + item.quantity * Number(item.price.replace(/\./g, ""));
  }, 0);

  const handleAddToCart = () => {
    dispatch(
      addItem({
        ...productSample,
        id: Date.now(),
        quantity: 1,
      })
    );
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1>Cart Management App</h1>
      <div className="flex items-center justify-between gap-8">
        <div className="border rounded-xl px-4 pt-8 pb-2 shadow-md">
          <div className="flex flex-col items-center justify-center gap-3">
            <img src="../../../src/assets/react.svg" alt="product" />
            <span className="text-xl font-semibold">{productSample.title}</span>
            <span className="text-red-500">{productSample.price} VND</span>
            <button
              className="w-full !border-blue-400 !bg-blue-200 hover:!bg-blue-600 transition !outline-none"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="position overflow-auto max-h-[300px]">
          <div>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-4 border rounded-md !bg-gray-700">
            <span className="text-2xl text-white font-bold">Total</span>
            <span className="text-red-500 text-2xl">
              {total.toLocaleString()} VND
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

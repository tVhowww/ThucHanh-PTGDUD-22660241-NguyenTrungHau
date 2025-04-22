import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleUpdateQuantity = ({ id, quantity }) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-300 shadow-md px-6 py-4">
      <div className="flex flex-col items-start w-[300px]">
        <span className="font-semibold text-xl">{item.title}</span>
        <span className="text-red-500">{item.price} VND</span>
      </div>
      <div className="flex gap-3">
        <div className="flex items-center gap-2">
          <button
            className="p-2 border !bg-gray-300 !text-black hover:!bg-gray-500 transition outline-none"
            onClick={() =>
              handleUpdateQuantity({
                id: item.id,
                quantity: Math.max(item.quantity - 1, 1),
              })
            }
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            className="p-2 border !bg-gray-300 !text-black hover:!bg-gray-500 transition outline-none"
            onClick={() =>
              handleUpdateQuantity({
                id: item.id,
                quantity: item.quantity + 1,
              })
            }
          >
            +
          </button>
        </div>
        <div>
          <button
            className="px-4 py-2 !bg-red-200 !border-red-400 hover:!bg-red-600 !text-black transition outline-none"
            onClick={() => {
              handleRemove(item.id);
            }}
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

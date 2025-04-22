import React from "react";

function TodoItem({ todo, onRemove, onToggle }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div>
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={todo.completed}
            onChange={onToggle}
          />
        </div>
        <span
          className={
            todo.completed
              ? "line-through text-gray-500 cursor-pointer"
              : "cursor-pointer"
          }
          onClick={onToggle}
        >
          {todo.title}
        </span>
      </div>
      <div className="">
        <button
          className="px-4 py-2 !border-red-400 !bg-red-200 hover:!bg-red-600 transition text-black"
          onClick={onRemove}
        >
          remove
        </button>
      </div>
    </div>
  );
}

export default TodoItem;

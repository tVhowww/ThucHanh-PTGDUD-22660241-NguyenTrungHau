import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { addTodo, removeTodo, toggleTodo } from "../todoListSlice";

function TodoList() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleAdd = (text) => {
    dispatch(addTodo(text));
    setText("");
  };

  const handleChange = (e) => setText(e.target.value);

  return (
    <div className="flex flex-col gap-4 border rounded-xl p-20 shadow-2xl">
      <h1>TO-DO LIST</h1>
      <div className="flex items-center gap-2">
        <input
          className="p-1 border"
          type="text"
          value={text}
          onChange={handleChange}
        />
        <button
          className="!bg-blue-200 border-blue-400 hover:!bg-blue-600 transition text-black"
          onClick={() => handleAdd(text)}
        >
          Add
        </button>
      </div>
      <ul className="flex flex-col gap-2">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onRemove={() => handleRemove(todo.id)}
              onToggle={() => handleToggle(todo.id)}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;

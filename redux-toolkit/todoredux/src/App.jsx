import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './store/features/todo/todoSlice';

const App = () => {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h1 className="text-xl font-bold mb-4">Todo RTK</h1>
        <div className="flex mb-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            // onKeyDown={(e) => {
            //   if (e.key === "Enter") {
            //     handleAdd();
            //   }
            // }}
            onKeyDown={(e) => e.key === "Enter" ? handleAdd() : ""}
            className="flex-1 border p-2 rounded"
            placeholder="Add todo..."
          />
          <button
            onClick={handleAdd}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center py-2 border-b"
            >
              <span
                onClick={() => dispatch(toggleTodo(todo.id))}
                className={`cursor-pointer ${
                  todo.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                // onKeyDown={(e) => e.key === "Enter" ? dispatch(deleteTodo(todo.id)) : ""}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
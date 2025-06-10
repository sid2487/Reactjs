import React, { useEffect, useRef, useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const inputRef = useRef(null);
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    try {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if (text === "" && inputRef.current) {
      inputRef?.current.focus();
    }
  }, [text]);

  const addTodo = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    if (text.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setText("");
  };

  const toggleTodo = (id) => {
    const updatedTodo = todos.map((todo) => {
       return todo.id === id ? {...todo, done: !todo.done} : todo;
    });

    setTodos(updatedTodo);
  };

  const deleteTodo = (id) => {
    const updateDelete = todos.filter((todo) => todo.id !== id);
    setTodos(updateDelete);
  }

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-md">
        <h1 className="text-xl font-bold text-center mb-4">Meal Tracker</h1>
        <div className="flex mb-2 gap-4 ">
          <input
            value={text}
            ref={inputRef}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
                if(e.key === "Enter"){
                    addTodo();
                }
            }}
            className="flex-1 border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
          />
          <button
            onClick={addTodo}
            className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer text-white"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo) => (
            <li 
            key={todo.id}
            className={`flex justify-between items-center px-3 py-2 rounded-md ${todo.done ? "bg-green-100" : "bg-gray-100"}`}
            >
              <span 
              className={`cursor-pointer flex-1 ${todo.done ? "line-through text-gray-500" : ""}`}
              onClick={() => toggleTodo(todo.id)}
              >{todo.text}</span>

              <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700 cursor-pointer"
              >❌</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;

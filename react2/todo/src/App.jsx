import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  // const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  // load saved data todo on mount
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
    if (text === "" && inputRef.current) {
      inputRef.current?.focus();
    }
  }, [text]);


  // save todo to local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const handleAdd = () => {
    // console.log("button pressed")
    if (inputRef.current) {
      inputRef.current.focus();
    }
    if(text.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text,
      done: false,
    };
    setTodos([...todos, newTodo]);
    setText("");
    // inputRef.current.focus();
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) => 
      todo.id === id ? {...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 ">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">TODO APP</h1>

        <div className=" flex gap-2 mb-4">
          <input
            ref={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Add a new Task"
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onKeyDown={(e) => {
              if(e.key === "Enter"){
                handleAdd();
              }
            }}
          />

          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        <ul className='space-y-2'>
          {todos.map((todo) => (
            <li 
            key={todo.id}
            className={`flex justify-between items-center px-3 py-2 rounded-md ${todo.done ? "bg-green-100" : "bg-gray-100"}`}
            >
              <span 
              className={`cursor-pointer flex-1 ${todo.done ? "line-through text-gray-500" : ""}`}
              onClick={() => toggleDone(todo.id)}
              >{todo.text}
              </span>

              <button 
              onClick={() => deleteTodo(todo.id)}
              className='text-red-500 hover:text-red-700 ml-3'
              >❌</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App
import React, { useEffect, useState } from 'react'

const App = () => {
  const [input, setInput] = useState("")
  // const [items, setItems] = useState([]);
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("todoItems");
    return storedItems ? JSON.parse(storedItems) : [];
  })

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items])

  const handleInput = (e) => {
    setInput(e.target.value)
  }
  // console.log(input)

  const handleSubmit = () => {
    if(input.trim() === "") return;

    const newItems = { text: input, checked: false };
    setItems([...items, newItems]);
    setInput("")
  }
  console.log(items)

  const toggleCheckBox = (index) => {
    const updateItem = items.map((item, i) => i===index ? {...item, checked: !item.checked} : item) 
    setItems(updateItem);
    console.log(updateItem)
  }

  const delteTodo = (indexToDelete) => {
    const updateItem = items.filter((item, index) => index !== indexToDelete);
    setItems(updateItem);
  }


  return (
    <div className="bg-gray-400 m-5 flex items-center justify-center mx-auto w-120 rounded p-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-center">Simple Todo</h2>
        <input
          value={input}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          onChange={handleInput}
          className="border border-amber-50 rounded p-2 m-2 w-full"
          placeholder="Enter your Todo"
          type="text"
        />

        <div className="p-2">
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 rounded"
              >
                <div className="flex items-center w-60">
                  <span className={`${item.checked ? "line-through" : "none"}`}>
                    {item.text}
                  </span>
                  <input
                    checked={item.checked}
                    onChange={() => toggleCheckBox(index)}
                    className="ml-2"
                    type="checkbox"
                  />
                </div>

                <button
                  onClick={() => delteTodo(index)}
                  className="bg-red-500 text-white rounded px-3 py-1 hover:bg-red-600 cursor-pointer"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-blue-500 rounded mx-2 px-2 hover:bg-blue-600 cursor-pointer w-100"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App
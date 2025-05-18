import { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState("")
  // const [items, setItems] = useState([])
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("todoItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });


  // load to local storage and get from there

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(items)); 
  }, [items]) 

  const handleClick = (e) => { 
    setInput(e.target.value)
  }
  // console.log(input)

  const handleSubmit = (e) => {
    if(input.trim() === "") return;

    const newItems = { text: input, checked: false };

    setItems([...items, newItems]);
    setInput("");
  }
  // console.log(items)

  const toggleCheckBox = (index) => {
    const updateItems = items.map((item, i) => 
    i===index ? {...item, checked: !item.checked} : item)
    setItems(updateItems);
    // console.log(updateItems)
  }

  const handleDelete = (indexToDelete) => {
    const updateItems = items.filter((item, index) => index !== indexToDelete);  
    setItems(updateItems);
  }

  

  return (
    <div className="bg-gray-400 m-5 flex items-center justify-center mx-auto w-120 rounded p-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-center">Simple Todo</h2>
        <input
          value={input}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          onChange={handleClick}
          className="border border-amber-50 rounded p-2 m-2 w-full"
          type="text"
          placeholder="Enter your Todo"
        />

        <div className="p-2">
          <ul className="space-y-2">
            Finish the React!!
            {items.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 rounded"
              >
                <div
                  className={`flex items-center w-60 ${
                    item.checked ? "line-through" : "none"
                  }`}
                >
                  <span className="mx-1">{item.text}</span>
                  <input
                    checked={item.checked}
                    onChange={() => toggleCheckBox(index)}
                    type="checkbox"
                    className="ml-2"
                  />
                </div>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white rounded px-3 py-1 hover:bg-red-600 cursor-pointer"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center ">{items.filter((item) => !item.checked).length} Todos remaining</p>

        <button
          className="bg-blue-500 rounded mx-2 px-2 hover:bg-blue-600 cursor-pointer w-100"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App

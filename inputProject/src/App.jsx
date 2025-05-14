import React, { useState } from 'react'

const App = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  }
  // console.log(input)

  const handleSubmit = () => {
    if(input.trim() === '') return;

    const newItem = { text: input, checked: false};

    setItems([...items, newItem]);
    setInput('');
  }
  // console.log(data)

  const toggleCheckBox = (index) => {
    const updateItems = items.map((item, i) => 
    i===index ? {...item, checked: !item.checked} : item);
    setItems(updateItems);
  }


  return (
    <div className="flex justify-center p-5">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl font-semibold">Input handler Practise</h2>

        <input
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          type="text"
          value={input}
          placeholder="Type Something...."
          onChange={handleChange}
          className="border border-gray-300 rounded px-4 py-2 w-64"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py2 rounded hover:bg-blue-600"
        >
          Submit
        </button>

        <div>
          <h3>Submitted items:</h3>
          <ul>
            {items.map((item, index) => (
              <li key={index} className={`flex items-center gap-2 mb-2 ${item.checked ? 'line-through' : 'none'}`}>

                <input 
                type="checkbox" 
                checked={item.checked}
                onChange={() => toggleCheckBox(index)}
                />
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App
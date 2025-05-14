import React from "react";
import { useTheme } from "../context/useTheme";


const Card = () => {
    const { theme, toggleTheme } = useTheme();

    return (
      <div className="p-6 max-w-sm mx-auto bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Theme Toggle Card</h2>
        <p className="mb-4">Current theme: {theme}</p>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:opacity-80"
        >
          Toggle Theme
        </button>
      </div>
    );
};

export default Card;
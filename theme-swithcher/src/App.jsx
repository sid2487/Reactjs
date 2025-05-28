// src/App.jsx
import React, { useState } from "react";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const themeStyles = {
    backgroundColor: isDark ? "#1e1e1e" : "#ffffff",
    color: isDark ? "#ffffff" : "#000000",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
  };

  const buttonStyle = {
    padding: "10px 20px",
    marginTop: "20px",
    cursor: "pointer",
    background: isDark ? "#333" : "#ddd",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
  };

  return (
    <div style={themeStyles}>
      <h1>{isDark ? "Dark Theme" : "Light Theme"}</h1>
      <button onClick={toggleTheme} style={buttonStyle}>
        Switch to {isDark ? "Light" : "Dark"} Theme
      </button>
    </div>
  );
};

export default App;

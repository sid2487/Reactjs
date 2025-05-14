import { useEffect, useState } from 'react';
import './App.css'
import { ThemeProvider } from './context/ThemeContext';
import Card from './components/Card';



function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if(theme === 'dark'){
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));


  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <div 
      className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}
      >
        <Card />
      </div>
    </ThemeProvider>
  )
}

export default App

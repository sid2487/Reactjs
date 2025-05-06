import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card';
import { ThemeProvider } from './context/useTheme';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if(theme == 'dark'){
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  const contextValue = { theme, toggleTheme };

  return (
    <ThemeProvider value={contextValue}>
      <div
        className={`min-h-screen ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <Card />
      </div>
    </ThemeProvider>
  );
}

export default App

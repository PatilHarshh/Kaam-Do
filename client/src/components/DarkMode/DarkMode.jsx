import { useState, useEffect } from "react";
import sunIcon from '../DarkMode/sun.png';
import moonIcon from '../DarkMode/moon.webp';

function DarkMode() {
  const [theme, setTheme] = useState(() => {
    // Retrieve theme from local storage or default to 'light'
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
    
  return (
    <div>
      <button className="dark:bg-white flex items-center justify-center p-1 text-black rounded-xl dark:text-white" onClick={handleThemeSwitch}>
        {theme === "dark" ? (
          <img src={moonIcon} alt="Moon Icon" className="w-8 h-8" />
        ) : (
          <img src={sunIcon} alt="Sun Icon" className="w-8 h-8 mr-2" />
        )}
      </button>
    </div>
  );
}

export default DarkMode;

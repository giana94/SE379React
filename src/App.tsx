import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import ToggleSwitch from './components/ToggleSwitch';
import { ThemeContext, themes } from './context/themeContext';
import { useState, useEffect } from 'react';
import React from 'react';
import Home from './components/Home';

function App() {
  const [theme, setTheme] = useState(themes.light);
  const location = useLocation(); 

  const toggleTheme = () => {
    setTheme((prevValue) =>
      prevValue === themes.dark ? themes.light : themes.dark
    );
  };

  useEffect(() => {
    document.body.style.background = theme.background;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme }}>
      <div className="App" style={{ backgroundColor: theme.background, color: theme.foreground }}>
        <div className="toggle-container">
          <ToggleSwitch onToggle={toggleTheme} />
        </div>
        {location.pathname === '/' && <Home />}
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

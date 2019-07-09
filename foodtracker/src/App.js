import React from 'react';

import Navbar from './components/Navbar';
import FoodList from './components/FoodList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar/>
        <FoodList/>
        <ThemeToggle/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;

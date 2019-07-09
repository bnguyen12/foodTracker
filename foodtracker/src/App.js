import React from 'react';

import Navbar from './components/Navbar';
import FoodList from './components/FoodList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar/>
          <FoodList/>
          <ThemeToggle/>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;

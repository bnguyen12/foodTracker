import React from 'react';

import Navbar from './components/Navbar';
import FoodList from './components/FoodList';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar/>
        <FoodList/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;

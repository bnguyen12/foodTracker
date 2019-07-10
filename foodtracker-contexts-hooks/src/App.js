import React from 'react';
import FoodContextProvider from './contexts/FoodContext';
import Navbar from './components/Navbar';
import FoodList from './components/FoodList';

function App() {
  return (
    <div className="App">
      <FoodContextProvider>
        <Navbar />
        <FoodList />
      </FoodContextProvider>
    </div>
  );
}

export default App;

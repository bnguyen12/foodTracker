import React from 'react';
import FoodContextProvider from './contexts/FoodContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <FoodContextProvider>
        <Navbar/>
      </FoodContextProvider>
    </div>
  );
}

export default App;

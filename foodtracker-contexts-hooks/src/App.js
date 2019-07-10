import React from 'react';
import FoodContextProvider from './contexts/FoodContext';
import Navbar from './components/Navbar';
import FoodList from './components/FoodList';
import FoodForm from './components/FoodForm';

function App() {
  return (
    <div className="App">
      <FoodContextProvider>
        <Navbar />
        <FoodList />
        <FoodForm />
      </FoodContextProvider>
    </div>
  );
}

export default App;

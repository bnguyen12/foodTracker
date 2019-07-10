import React, { useContext } from 'react';
import { FoodContext } from '../contexts/FoodContext';

const Navbar = () => {
  const { foods } = useContext(FoodContext);
  return (
    <div className="navbar">
      <h1>Benny's Food List</h1>
      <p>Currently you have {foods.length} foods to eat...</p>
    </div>
  )
}

export default Navbar;
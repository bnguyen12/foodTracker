import React, { useContext, useState } from 'react';
import { FoodContext } from '../contexts/FoodContext';

const FoodForm = () => {
  const { addFood } = useContext(FoodContext);
  const [name, setName] = useState('');
  const [foodType, setFoodType] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addFood(name, foodType);
    setName('');
    setFoodType('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="food name" value={name}
        onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="food type" value={foodType}
        onChange={(e) => setFoodType(e.target.value)} required />
      <input type="submit" value="add food" />
    </form>
  );
}

export default FoodForm;
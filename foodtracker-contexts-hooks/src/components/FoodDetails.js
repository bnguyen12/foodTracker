import React, { useContext } from 'react';
import { FoodContext } from '../contexts/FoodContext';

const FoodDetails = ({ food }) => {
  const { removeFood } = useContext(FoodContext);
  return (
    <li onClick={() => removeFood(food.id)}>
      <div className="name">{food.name}</div>
      <div className="foodType">{food.foodType}</div>
    </li>
  );
}

export default FoodDetails;
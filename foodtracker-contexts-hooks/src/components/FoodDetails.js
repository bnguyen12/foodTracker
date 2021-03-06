import React, { useContext } from 'react';
import { FoodContext } from '../contexts/FoodContext';

const FoodDetails = ({ food }) => {
  const { dispatch } = useContext(FoodContext);
  return (
    <li onClick={() => dispatch({type: 'REMOVE_FOOD', id: food.id})}>
      <div className="name">{food.name}</div>
      <div className="foodType">{food.foodType}</div>
    </li>
  );
}

export default FoodDetails;
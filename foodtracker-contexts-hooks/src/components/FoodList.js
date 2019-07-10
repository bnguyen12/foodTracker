import React, { useContext } from 'react';
import { FoodContext } from '../contexts/FoodContext';
import FoodDetails from './FoodDetails';

const FoodList = () => {
  const { foods } = useContext(FoodContext);
  // if foods is not empty, return the first in this ternary operator
  return foods.length ? (
    <div className="food-list">
      <ul>
        {foods.map(food => {
          return ( <FoodDetails food={food} key={food.id} />)
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No foods to eat. You've met your goal!</div>
  );
}
export default FoodList;
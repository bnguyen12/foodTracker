import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { FoodContext } from '../contexts/FoodContext';

// Using context and hooks inside of a functional component
const FoodList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { foods } = useContext(FoodContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className='food-list' style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        {foods.map(food => {
          return (
            <li key={food.id} style={{ background: theme.ui }}>{food.name}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default FoodList;
import React, { useState } from 'react';

import uuid from 'uuid/v1';
import NewFoodForm from './NewFoodForm';

const FoodList = () => {
  // foods is the data, setFoods is the function to change data
  const [foods, setFoods] = useState([
    { name: 'jelly', id: 1 },
    { name: 'peanut butter', id: 2 },
    { name: 'bread', id: 3 }
  ]);

  const addFood = (name) => {
    // completely replaces the current value of "foods"
    // uuid creates a unique id when invoked
    setFoods([...foods, { name, id: uuid() }]);
  }

  return ( 
    <div className='food-list'>
      <ul>
        {foods.map(food => {
          return ( <li key={food.id}>{food.name}</li> )
        })}
      </ul>
      <NewFoodForm addFood={addFood} />
    </div>
  );
}

export default FoodList;
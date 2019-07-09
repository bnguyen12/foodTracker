import React, { useState, useEffect } from 'react';

import uuid from 'uuid/v1';
import NewFoodForm from './NewFoodForm';

const FoodList = () => {
  // foods is the data, setFoods is the function to change data
  const [foods, setFoods] = useState([
    { name: 'jelly', id: 1 },
    { name: 'peanut butter', id: 2 },
    { name: 'bread', id: 3 }
  ]);

  const [age, setAge] = useState(20);

  const addFood = (name) => {
    // completely replaces the current value of "foods"
    // uuid creates a unique id when invoked
    setFoods([...foods, { name, id: uuid() }]);
  }

  // runs every time component re-renders
  // only calls this function when data inside the array arg is changed
  useEffect(() => {
    console.log('useEffect hook ran', foods);
  }, [foods])

  useEffect(() => {
    console.log('useEffect hook ran', age);
  }, [age])

  return ( 
    <div className='food-list'>
      <ul>
        {foods.map(food => {
          return ( <li key={food.id}>{food.name}</li> )
        })}
      </ul>
      <NewFoodForm addFood={addFood} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
}

export default FoodList;
import React, { createContext, useState } from 'react';

import uuid from 'uuid/v1';

export const FoodContext = createContext();

const FoodContextProvider = (props) => {
  const [foods, setFoods] = useState([
    { name: 'banana', foodType: 'breakfast', id: 1 },
    { name: 'apple', foodType: 'breakfast', id: 2 }
  ]);

  const addFood = (name, foodType) => {
    setFoods([...foods, {name, foodType, id: uuid()}]);
  };

  const removeFood = (id) => {
    setFoods(foods.filter(food => food.id !== id));
  };

  return (
    <FoodContext.Provider value={{foods, addFood, removeFood}}>
      { props.children }
    </FoodContext.Provider>
  )
}

export default FoodContextProvider;
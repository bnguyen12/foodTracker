import React, { createContext, useState } from 'react';

export const FoodContext = createContext();

const FoodContextProvider = (props) => {
  const [foods, setFoods] = useState([
    { name: 'bacon', id: 1 },
    { name: 'cheese', id: 2 },
    { name: 'banana', id: 3 },
    { name: 'papaya', id: 4 }
  ]);

  return (
    <FoodContext.Provider value={{foods}}>
      {props.children}
    </FoodContext.Provider>
  );
}

export default FoodContextProvider;
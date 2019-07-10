import React, { createContext, useReducer, useEffect } from 'react';
import { foodReducer } from '../reducers/foodReducer';

export const FoodContext = createContext();

const FoodContextProvider = (props) => {
  // the third argument gives a default value
  const [foods, dispatch] = useReducer(foodReducer, [], () => {
    const localData = localStorage.getItem('foods');
    return localData ? JSON.parse(localData) : []
  });

  // save to local storage whenver foods changes
  useEffect(() => {
    localStorage.setItem('foods', JSON.stringify(foods));
  }, [foods]);

  return (
    <FoodContext.Provider value={{foods, dispatch}}>
      { props.children }
    </FoodContext.Provider>
  )
}

export default FoodContextProvider;
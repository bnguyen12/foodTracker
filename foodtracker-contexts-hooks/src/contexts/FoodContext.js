import React, { createContext, useReducer } from 'react';
import uuid from 'uuid/v1';
import { foodReducer } from '../reducers/foodReducer';

export const FoodContext = createContext();

const FoodContextProvider = (props) => {
  const [foods, dispatch] = useReducer(foodReducer, []);
  return (
    <FoodContext.Provider value={{foods, dispatch}}>
      { props.children }
    </FoodContext.Provider>
  )
}

export default FoodContextProvider;
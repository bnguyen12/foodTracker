import uuid from 'uuid/v1';

export const foodReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_FOOD':
      return [...state, {
        name: action.food.name,
        foodType: action.food.foodType,
        id: uuid()
      }]
    case 'REMOVE_FOOD':
      return state.filter(food => food.id !== action.id);
    default:
      return state;
  }
}
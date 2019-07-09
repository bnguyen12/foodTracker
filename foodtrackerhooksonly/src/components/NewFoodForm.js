import React, { useState } from 'react';

const NewFoodForm = ({ addFood }) => {
  // '' is initial value for 'name'
  const [name, setName] = useState('');

  // handles adding item
  const handleSubmit = (e) => {
    e.preventDefault();
    addFood(name);
    setName(''); // clears input
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Food name:</label>
      <input type="text" value={name} required onChange={(e) => setName(e.target.value)} />
      <input type="submit" value="add food" />
    </form>
  );
}

export default NewFoodForm;
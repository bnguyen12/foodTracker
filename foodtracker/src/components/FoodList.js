import React, { Component } from 'react';

class FoodList extends Component {
  render() { 
    return ( 
      <div className='food-list'>
        <ul>
          <li>Eggs</li>
          <li>Rice</li>
          <li>Protein bar</li>
        </ul>
      </div>
    );
  }
}

export default FoodList;
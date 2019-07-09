import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class FoodList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return ( 
      <div className='food-list' style={{ color: theme.syntax, background: theme.bg }}>
        <ul>
          <li style={{ background: theme.ui }} >Eggs</li>
          <li style={{ background: theme.ui }}>Rice</li>
          <li style={{ background: theme.ui }}>Protein bar</li>
        </ul>
      </div>
    );
  }
}

export default FoodList;
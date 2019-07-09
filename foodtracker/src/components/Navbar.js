import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
  // attaches state of ThemeContextProvider into this component
  static contextType = ThemeContext;
  render() {
    console.log(this.context);
    
    // setting properties in this component to match ones in context
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return ( 
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context app</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
  render() {
    return ( 
      // another way for this component to consume a context
      // can be used in a functional component with multiple contexts
      <ThemeContext.Consumer>{(context) => {
        // setting properties in this component to match ones in context
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        return(
          <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Context app</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact us</li>
            </ul>
          </nav>
        )
      }}</ThemeContext.Consumer>
    );
  }
}

export default Navbar;
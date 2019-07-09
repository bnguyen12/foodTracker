import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {
  render() {
    return ( 
      // another way for this component to consume a context
      // can be used in a functional component with multiple contexts
      <AuthContext.Consumer>{(authContext) => (
        <ThemeContext.Consumer>{(themeContext) => {
          // setting properties in this component to match ones in context
          const { isAuthenticated, toggleAuth } = authContext;
          const { isLightTheme, light, dark } = themeContext;
          const theme = isLightTheme ? light : dark;
          return(
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>Context app</h1>
              <div onClick={toggleAuth}>
                { isAuthenticated ? "Logged in" : "Logged out" }
              </div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
              </ul>
            </nav>
          )
        }}</ThemeContext.Consumer>
      )}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
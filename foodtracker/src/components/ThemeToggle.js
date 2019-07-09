import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// class ThemeToggle extends Component {
//   static contextType = ThemeContext;
//   render() { 
//     const { toggleTheme } = this.context;
//     return ( 
//       <button onClick={toggleTheme}>Toggle the theme</button>
//     );
//   }
// }

// Using context and hooks with functional component
const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>Toggle the theme</button>
  );
}

export default ThemeToggle;
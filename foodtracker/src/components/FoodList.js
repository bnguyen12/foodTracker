import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// Using only context API in a component
// class FoodList extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return ( 
//       <div className='food-list' style={{ color: theme.syntax, background: theme.bg }}>
//         <ul>
//           <li style={{ background: theme.ui }} >Eggs</li>
//           <li style={{ background: theme.ui }}>Rice</li>
//           <li style={{ background: theme.ui }}>Protein bar</li>
//         </ul>
//       </div>
//     );
//   }
// }

// Using context and hooks inside of a functional component
const FoodList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
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

export default FoodList;
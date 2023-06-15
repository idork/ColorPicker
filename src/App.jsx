import { useState } from 'react'
// Write your Color component here
const Color = ({ color, setSelectedColor, border }) => {
  return <div className={color}
    onClick={() => {
      setSelectedColor(color, border);
    }}>


  </div> //getting the color from the obj
}
/* setSelectedColor is a click handler
 
 it needs a callback function (color)*/
//assigning a css class name to React element 
//(className) is jsx writing
//this component is written this way because we need a return 

const App = () => {
  const [selectedColor, setSelectedColor] = useState("") //this is connecting to the colors
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor} >{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor} border="selected" /> {/* outputting the color in a color. color = red same as 
        user={user} but we are just assigning it to css class */}
        <Color color="blue" setSelectedColor={setSelectedColor} border="selected" /> {/* outputting the color in a color */}
        <Color color="green" setSelectedColor={setSelectedColor} border="selected" /> {/* outputting the color in a color */}

        {/* the above <Color color is now what we want to connect to our component
        above of const Color */}
      </div>
    </div>

  );
};

export default App;

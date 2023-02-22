import React from 'react'
import './App.css';
import Code from './Code';
import Selection from './Selection';
import './Code.css'
import ColorGradient from './ColorGradient';



function App() {
 
  const [changeColor, setChangeColor] = React.useState({
    color1: "rgb(0, 0, 0)", color2: "rgb(255, 255, 255)", deg: "90" 
    })
 

    
    function handleChange (event) {
      setChangeColor(prevChangeColor => {
          return {
              ...prevChangeColor,
              [event.target.name]: event.target.value
          }
         
      })
      
    }
    console.log(changeColor)

 
  return (
    
    <div className="App">
      <h1>Gradient</h1>

      <div className="codeBox">
            
           <Code data={changeColor}>
                <ColorGradient onChange={handleChange} style={{backgroundImage: `linear-gradient (${changeColor.deg}, rgb(${changeColor.color1}), rgb(${changeColor.color2}))`}}></ColorGradient>
            </Code>  
            <Selection onChange={handleChange}></Selection>
      </div>
            
            
      
      

      
    </div>
  );
}

export default App;

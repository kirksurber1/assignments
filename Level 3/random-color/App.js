import './App.css';
import ColorHolder from './ColorHolder';
import axios from 'axios'


function App() {

  function getColor () {
    return(
   axios.get("https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}")
  // )
    .then (res => console.log(res.data))
    
    .catch(error => console.log("error"))
    )
  }
 

  return (
    <div className="App">
      <h1>Hello</h1>
    <ColorHolder getColor={getColor}/>
    </div>
  );
}

export default App;

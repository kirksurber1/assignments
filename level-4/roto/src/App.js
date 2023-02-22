import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './Home';
import Price from './Price';
import About from './About'

function App() {
  return (
    <div className="App">

      <Router>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/Price'>Price</Link>
          <Link to='/About'>About</Link>
        </nav>
        
        

        
        
        
        <footer>
        <ul>
          <li>www.roto.router.com</li>
          <li>555-555-5555</li>
          <li>1600 Pennsylvania Ave</li>
          <li>Washington D.C. 20500</li>
        </ul>
      </footer>
        
        <Routes>
          <Route index element={<Home/>} ></Route>
          <Route path="/Price" element={<Price/>} ></Route>
          <Route path="/About" element={<About/>} ></Route>
        </Routes>
      </Router>

      
      
      

    </div>
  );
}

export default App;

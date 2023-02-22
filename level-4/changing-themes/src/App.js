import React from 'react';
import './App.css';
import Main from './Main';
import Footer from './Footer'
import Navbar from './Navbar'
import { ThemeContext } from './ChangeThemeContext';
import { useContext } from 'react';


function App() {

  const {theme} = useContext(ThemeContext)
  

  return (
    <div className={`${theme}-theme`}>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;

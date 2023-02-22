import React from 'react';
import './App.css';
import Form from './Form';
import UglyBack from './UglyBack';
import {DataContext} from './Context';



function App(props) {
 

  

  return (
    <div className="App">
      <h1>Ugly Things</h1>
      <Form />
      <DataContext.Provider >
        <UglyBack />
      </DataContext.Provider>
    </div>
  );
}

export default App;

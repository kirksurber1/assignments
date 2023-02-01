import React from 'react';
import './App.css';

function App() {
  const [itemArray, setItemArray] =  React.useState ([])
  const [formData, setFormData] = React.useState({
    name: "", 
    id: ""
  })

  function handleChange (event) {
    const {name, value} = event.target 
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
      }))
    } 
  

  function handleSubmit (event) {
    event.preventdefault()
    
    setFormData({
      name: ""
    });
  }

  console.log (formData.name)

  

  function addItem(event) {
    event.preventDefault()
    
    setItemArray(prevItemArray => [formData.name, ...prevItemArray ])
    
    
    
  }

  const itemsAdd = itemArray.map(item => <li key={item}>{item}</li>)

    return (
      <div className="App">
        <div className='nameEntry'>
            <form onSubmit={handleSubmit}>
              <input 
              type="text"
              placeholder="item"
              onChange={handleChange}
              name="name"
              value={formData.name}
              />
              <button onClick={addItem}>Enter</button>
            </form>
            <h1>-{formData.name}-</h1>
            <ul>
                <li>{itemsAdd}</li>
            </ul>
  
        </div>
        
      </div>
    )
    

}

  

export default App;

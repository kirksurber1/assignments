import React from 'react'


function Selection (props) {

    const [changeColor, setChangeColor] = React.useState({
        color1: "", color2: "rgb(255, 255, 255)", deg: 90 
        })
     
    
      function handleChange (event) {
        setChangeColor(prevChangeColor => {
            return {
            
                [event.target.name]: event.target.value
            }
           
        })
        console.log(changeColor)
      }
       
    return (
        <div className='codeRight'>
            <p>Color Selector</p>
            <label>Color 1</label>
            <input onChange={handleChange} type="color" name="color1" value={props.color1} ></input>
            <label>Color 2</label>
            <input onChange={handleChange} type="color" value={props.color2} name='color2'></input>
            <label>Deg.</label>
            <input onChange={handleChange} type="num" min="0" max="360" placeholder='0 - 360' name='deg' value={props.deg}></input>

        </div>
    )
}

export default Selection
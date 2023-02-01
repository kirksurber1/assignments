import React from 'react'
import Die from './Die'
function DiceBox () {


    const diceArray = [1, 2, 3, 4, 5, 6]
    const random = diceArray[Math.floor(Math.random () * diceArray.length)]

    const [die, setDie] = React.useState("1")

    function handleClick () {
        setDie (random)
            
        }
            
        
        
        

    

    return (
        <div>
            <div>
            <h1>{random}</h1>
            <button onClick={handleClick}>Roll Die</button>
            </div>
            <div>
                <Die press={handleClick}/>
                <Die press={handleClick}/>
                <Die press={handleClick}/>
                
            </div>
        </div>
    )
}

export default DiceBox
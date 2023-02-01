import React from 'react'
import './ColorHolder.css'

function ColorHolder (props) {

    const [color, setColor] = React.useState("")

     

      

            function handleClick(event) {
                setColor(props.getColor)
            }


    return (

        <div className='colorHolder'>
            <div className='colorBlock' style={{backgroundColor: color}} onClick={handleClick}></div>
            <div className='colorBlock'></div>
            <div className='colorBlock'></div>
            <div className='colorBlock'></div>
            <div className='colorBlock'></div>
            <div className='colorBlock'></div>
            <div className='colorBlock'></div>
            <div className='colorBlock'></div>
            <div className='colorBlock'></div>
            <div className='colorBlock'></div>
            <div className='colorBlock'></div>
            <div className='colorBlock'></div>

        </div>

    )
}

export default ColorHolder
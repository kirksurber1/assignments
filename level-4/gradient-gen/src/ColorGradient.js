import React from 'react'


function ColorGradient (props) {

    return (
        <div className="colorGradient" style={{backgroundImage: `linear-gradient ${props.color1}, ${props.color2}`}}>
            </div>
    )
}

export default ColorGradient
import React from 'react'
import './Code.css'


function Code (props) {

    return(
        <div className='codeLeft'>
            {props.children}
            <div className="code">
                <h4>code</h4>
                <textarea readOnly value={`backgroundImage: "linear-gradient"(${props.deg},${props.color1}. ${[props.color2]}`}/>         
            </div>
            
        </div>  
    )
    
}


export default Code
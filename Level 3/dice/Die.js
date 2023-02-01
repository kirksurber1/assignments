import React from "react";
import './Die.css'

function Die (props) {


    return (
        <div className="dieBox">
            <div className="die">
                <h3 onClick={props.handleClick}></h3>
            </div>
        </div>
    )
}

export default Die
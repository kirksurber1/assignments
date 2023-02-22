import React from "react";
import './UglyCard.css'

function UglyCard (props) {

    return (
        <div className="uglyCard">
            <h2>{props.title}</h2>
            <img src={props.imgUrl} alt={props.title}></img>
            <h4>{props.description}</h4>
        </div>
    )
}

export default UglyCard
import React from "react";
import './Pets.css'




function Pets (props) {

    
    return (
        <div className="petCard">
                <h3>{props.pets.name}</h3>
                <h4>{props.pets.breed}</h4>   
        </div>
    )
}

export default Pets
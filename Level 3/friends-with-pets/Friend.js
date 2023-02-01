import React from "react";
import './Friend.css'

function Friend (props) {

   
    

    return (
        
        <div className="card">
            <div className="friend">
                <h2>{props.item.name}</h2>
                <div className="friendPets">{props.children}</div>
            </div>
            
        </div>


    )
}

export default Friend
import React from "react";

function Cards (props) {


    return (
        <div className="card">
            <h2>{props.place}</h2>
            <h4>$ {props.price}</h4>
            <h4>Best Time of Year: {props.timeToGo}</h4>
            <div className="dollarSign">
                <p></p>
            </div>
        </div>
    )
}

export default Cards
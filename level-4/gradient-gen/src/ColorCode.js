import React from "react";
import './ColorCode.css'

function ColorCode (props) {
    return (
        <div>
            <div className="colorDisplay">

            </div>
            <div className="codeDisplay">
                <code>
                    {props.deg}
                </code>
            </div>
        </div>
    )
}

export default ColorCode
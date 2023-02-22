import React from "react";
import ColorCode from "./ColorCode";
import ColorSelectors from "./ColorSelectors";
import './GradientGen.css'

function GradientGen (props) {


    return (
        <div className="base">
            <ColorCode></ColorCode>
            <ColorSelectors></ColorSelectors>
        </div>
    )
}

export default GradientGen
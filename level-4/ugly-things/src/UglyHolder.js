import React, {useContext} from "react";
import './UglyHolder.css'
import UglyCard from './UglyCard'
import { UglyContext } from "./UglyContext";



function UglyHolder (props) {

    const {uglyItems} = useContext(UglyContext)

    const list = uglyItems.map((item, index) => <p key={item+index}>{item}</p>)
    
    return (

        <div>
            <h2>Ugly Holder</h2>
            {list}
        </div>
    )
}

export default UglyHolder
import React from "react";
import './Navbar.css'


function Navbar (props) {

    return (

        <div className="navBar">
            <h3>Start Bootstrap</h3>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SAMPLE POST</li>
                <li>CONTACT</li>
            </ul>
        </div>
    )
}

export default Navbar
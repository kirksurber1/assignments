import React from "react";
import './Header.css'
import Navbar from "./Navbar";

function Header () {
     

    return (
        <div className="header">
            <div id="overlay"></div>
            <Navbar/>
            <div className="title">
                <h1>Clean Blog</h1>
                <p>A Blog Theme by Start Bootstrap</p>
            </div>
            
        </div>

    )
}

export default Header
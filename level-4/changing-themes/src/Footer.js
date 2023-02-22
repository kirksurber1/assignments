import React from "react";
import './Footer.css'
import {ThemeContext} from './ChangeThemeContext'
import { useContext } from 'react'

function Footer () {

    const {theme} = useContext(ThemeContext)

    return (
        <footer className={`${theme}-theme`}>
            <ul>
                <li>Name</li>
                <li>Address</li>
                <li>Phone</li>
            </ul>

            <ul>
                <li>Services</li>
                <li>Sales</li>
                <li>Customer Service</li>
            </ul>
        </footer>
    )
}

export default Footer
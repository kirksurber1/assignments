import React from 'react'
import './Navbar.css'
import {ThemeContext} from './ChangeThemeContext'
import { useContext } from 'react'



function Navbar(props) {
    
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <div className='navBar'>
            <ul className={`${theme}-theme`}>
                <li onClick={toggleTheme}>Light</li>
                <li onClick={toggleTheme}>Dark</li>
            </ul>
        </div>
    )
}

export default Navbar
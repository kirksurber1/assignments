import React from "react";
import './Main.css'
import {ThemeContext} from './ChangeThemeContext'
import { useContext } from 'react'

function Main () {
   
    const {theme} = useContext(ThemeContext)

    return (
        <main className={`${theme}-theme`}>
            <h1>Hello People</h1>
            <h3>How are you today?</h3>
        </main>
    )
}

export default Main
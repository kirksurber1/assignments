
import React from "react";

const ThemeContext = React.createContext()

function ThemeProvider (props){
    const [theme, setTheme] = React.useState("light")

    function toggleTheme () {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    return(
        <ThemeContext.Provider value={{
            theme: theme,
            toggleTheme
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}
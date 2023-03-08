import React from "react"
import ThemeContext from "./ThemeContext"


function Header() {
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <header className={`${theme}-theme`}>
                        <h2>{theme === 'dark' ? "Dark" : "Light"} Theme</h2>
                    </header>
                )}
            </ThemeContext.Consumer>
        )    
}

export default Header
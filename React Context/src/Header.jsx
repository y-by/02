import React from "react"
import {ThemeContextConsumer} from "./ThemeContext"


function Header(props) {
        return (
            <ThemeContextConsumer>
                {theme => (
                    <header className={`${theme}-theme`}>
                        <h2>{theme === 'dark' ? "Dark" : "Light"} Theme</h2>
                    </header>
                )}
            </ThemeContextConsumer>
        )    
}

export default Header
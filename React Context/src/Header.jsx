import React from "react"
import {ThemeContextConsumer} from "./ThemeContext"

function Header(props) {
        return (
            <ThemeContextConsumer>
                {context => (
                    <header className={`${context.theme}-theme`}>
                        <h2>{context.theme === 'dark' ? "Dark" : "Light"} Theme</h2>
                    </header>
                )}
            </ThemeContextConsumer>
        )    
}

export default Header
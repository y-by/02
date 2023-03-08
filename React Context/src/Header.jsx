import React, {Component} from "react"
import ThemeContext from "./ThemeContext"


class Header extends Component {
    static contextType = ThemeContext
    render() {
        const theme = this.context
        console.log(`${theme}-theme`)
        return (
            <header className={`${theme}-theme`}>
                <h2>{theme === 'dark' ? "Dark" : "Light"} Theme</h2>
            </header>
        )    
    }
}

export default Header
import React from "react"
import propTypes from "prop-types"
import {ThemeContextConsumer} from "./ThemeContext"

function Button(props) {
            return (
                <ThemeContextConsumer>
                    {context => (
                        <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>
                    )}
                </ThemeContextConsumer>
            )
}

Button.propTypes = {
    theme: propTypes.oneOf(["light", "dark"])
}

Button.defaultProps = {
    theme: "dark"
}

export default Button
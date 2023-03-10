import React from "react"
import propTypes from "prop-types"
import {ThemeContextConsumer} from "./ThemeContext"

function Button(props) {
            return (
                <ThemeContextConsumer>
                    {theme => (
                        <button className={`${theme}-theme`}>Switch Theme</button>
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
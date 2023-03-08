import React from "react"
import propTypes from "prop-types"
// import ThemeContext from "./ThemeContext"

function Button(props) {
            return (
                <button className={`${props.theme}-theme`}>Switch Theme</button>
            )
}

Button.propTypes = {
    theme: propTypes.oneOf(["light", "dark"])
}

Button.defaultProps = {
    theme: "dark"
}

export default Button
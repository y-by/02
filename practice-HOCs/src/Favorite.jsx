import React from "react"
import {withToggler} from "./HOCs/withToggler"

function Favorite(props) {
      return (
          <div>
              <h3>Click heart to favorite</h3>
              <h1>
                  <span 
                      className="point"
                      onClick={props.toggle}
                  >
                      {props.on ? "❤️" : "♡"}
                  </span>
              </h1>
          </div>
      ) 
}

const SuperchargeFavoriteComponent = withToggler(Favorite)
export default SuperchargeFavoriteComponent
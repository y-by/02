import React from "react"
import ReactDOM from 'react-dom/client'
import './index.css'

import App from "./App"
import ThemeContext from "./ThemeContext"

// const ThemeContext = React.createContext()
// ThemeContext.Provider & ThemeContext.Consumer

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ThemeContext.Provider value={"dark"}>
        <App />
      </ThemeContext.Provider>
    </React.StrictMode>,
  )
  
// ReactDOM.render(<App />, document.getElementById("root"))

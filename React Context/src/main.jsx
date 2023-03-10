import React from "react"
import ReactDOM from 'react-dom/client'
import './index.css'

import App from "./App"
import {ThemeContextProvider} from "./ThemeContext"

// const ThemeContext = React.createContext()
// ThemeContext.Provider & ThemeContext.Consumer

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </React.StrictMode>,
  )
  
// ReactDOM.render(<App />, document.getElementById("root"))

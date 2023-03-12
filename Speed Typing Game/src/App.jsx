import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea defaultValue="textArea - value as defaultValue"/>
      <h4>H4 - Time reminaing: ???</h4>
      <button>Start</button>
      <h1>Word count: ???</h1>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header'
import Button from './Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Button />
    </div>
  )
}

export default App

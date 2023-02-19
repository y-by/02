import { useState } from 'react'
import './App.css'
import Header from './Header'
import Hero from './Hero'
import List from './List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <List />
        <List />
        <List />
        <List />
        <List />
      </main>
      <button href="#" className='msg-btn'>💬</button>
    </div>
  )
}

export default App

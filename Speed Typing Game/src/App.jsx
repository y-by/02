import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(10)
  
  function handleChange(e) {
      const {value} = e.target
      setText(value)
  }
  // console.log(text)
  
  function calcWordCount(text) {
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  useEffect(() => {
    if(timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    }
  }, [timeRemaining])
  
  return (
      <div>
          <h1>How fast do you type?</h1>
          <textarea
              id='myTextarea'
              onChange={handleChange}
              value={text}
          />
          <h4>Time remaining: {timeRemaining}</h4>
          <button onClick={() => console.log(calcWordCount(text))}>Start</button>
          <h1>Word count: ???</h1>
      </div>
  )
}

export default App
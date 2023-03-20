import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(2)
  const [isTimeRuning, setIsTimeRuning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  
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
    if(isTimeRuning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    } else {
      setIsTimeRuning(false)
      setWordCount(calcWordCount(text))
    }
  }, [timeRemaining, isTimeRuning])
  
  return (
      <div>
          <h1>How fast do you type?</h1>
          <textarea
              id='myTextarea'
              onChange={handleChange}
              value={text}
          />
          <h4>Time remaining: {timeRemaining}</h4>
          <button onClick={() => setIsTimeRuning(true)}>Start</button>
          <h1>Word count: {wordCount}</h1>
      </div>
  )
}

export default App
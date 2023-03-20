import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(2)
  const [isTimeRuning, setIsTimeRuning] = useState(false)
  
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
        console.log(isTimeRuning)
      }, 1000)
    } else {
      setIsTimeRuning(false)
      console.log(isTimeRuning)
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
          <h1>Word count: {calcWordCount(text)}</h1>
      </div>
  )
}

export default App
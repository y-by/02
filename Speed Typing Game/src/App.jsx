import React, { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const STARTING_TIME = 10

  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isTimeRuning, setIsTimeRuning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
    
  const textareaRef = useRef(null);
  
  function handleChange(e) {
      const {value} = e.target
      setText(value)
  }
  // console.log(text)
  
  function calcWordCount(text) {
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  function startGame() {
    textareaRef.current.focus()

    setIsTimeRuning(true)
    setTimeRemaining(STARTING_TIME)
    setWordCount(0)
    setText("")
  }

  function endGame() {
    setIsTimeRuning(false)
    setWordCount(calcWordCount(text))
  }

  useEffect(() => {
    if(isTimeRuning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    } else {
      endGame()
    }
  }, [timeRemaining, isTimeRuning])
  
  return (
      <div>
          <h1>How fast do you type?</h1>
          <textarea
              ref={textareaRef}
              disabled={!isTimeRuning}
              onChange={handleChange}
              value={text}
          />
          <h4>Time remaining: {timeRemaining}</h4>
          <button 
            disabled={isTimeRuning}
            onClick={startGame}
          >Start</button>
          <h1>Word count: {wordCount}</h1>
      </div>
  )
}

export default App
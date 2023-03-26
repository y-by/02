import React from 'react'
import './App.css'
import useWordGame from './hooks/useWordGame'

function App() {
  const {
    textareaRef,
    isTimeRuning,
    handleChange,
    text,
    timeRemaining,
    startGame,
    wordCount
  } = useWordGame(30)
  
  return (
      <div className='app'>
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
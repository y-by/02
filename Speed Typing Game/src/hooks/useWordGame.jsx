import { useState, useEffect, useRef } from 'react'

function useWordGame(startingTime = 10) {
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(startingTime)
  const [isTimeRuning, setIsTimeRuning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textareaRef = useRef(null);

  function handleChange(e) {
      const {value} = e.target
      setText(value)
  }

  function calcWordCount(text) {
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  function startGame() { 
    setIsTimeRuning(true)
    setTimeRemaining(startingTime)
    setWordCount(0)
    setText("")
    textareaRef.current.disabled = false
    textareaRef.current.focus()
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

  return {textareaRef, isTimeRuning, handleChange, text, timeRemaining, startGame, wordCount}
}

export default useWordGame

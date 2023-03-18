import { useState } from 'react'
import './App.css'


function App() {
  const [text, setText] = useState("")
  
  function handleChange(e) {
      const {value} = e.target
      setText(value)
  }
  console.log(text)
  
  function calcWordCount() {
    const textarea = document.getElementById('myTextarea');
    const words = textarea.value.trim().split(' ');
    // get 1 on empty input
    const filteredWords = words.filter(word => word !== "")
    const numberOfWords = filteredWords.length
    console.log(
      `Number of words: ${numberOfWords}
The words are: ${textarea.value}`
    );
  }
  
  return (
      <div>
          <h1>How fast do you type?</h1>
          <textarea
              id='myTextarea'
              onChange={handleChange}
              value={text}
          />
          <h4>Time remaining: ???</h4>
          <button onClick={calcWordCount}>Start</button>
          <h1>Word count: ???</h1>
      </div>
  )
}

export default App
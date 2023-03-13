import { useState } from 'react'
import './App.css'


function App() {
  const [text, setText] = useState("")
  
  function handleChange(e) {
      const {value} = e.target
      setText(value)
  }
  console.log(text)
  
  function calcWordCount(text) {
    console.log(text)
    const textarea = document.getElementById('myTextarea');
    const words = textarea.value.trim().split(/\s+/);
    const numWords = words.length;
    console.log('Number of words: ' + numWords);
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
import React, { useState, useRef } from 'react'
import './App.css'

function App() {
  const [newTodoValue, setNewTodoValue] = useState("")
  const [todoList, setTodoList] = useState([])

  const inputRef = useRef(null)

  function handleChange(event) {
    setNewTodoValue(event.target.value)
  }

  function addTodo(event) {
    event.preventDefault()
    setTodoList(prevTodoList => [...prevTodoList, newTodoValue])
    setNewTodoValue("")
    inputRef.current.focus()
    console.log(inputRef)
  }

  const allTodos = todoList.map(todo => <p key={todo}>{todo}</p>)

  return (
    <div className="App">
      <form>
        <input ref={inputRef} type="text" name="todo" value={newTodoValue} onChange={handleChange} />
        <button onClick={addTodo}>Add todo item</button>
      </form>
      {allTodos}
    </div>
  )
}

export default App

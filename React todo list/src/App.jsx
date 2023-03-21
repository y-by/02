import React, { useState } from 'react'
import './App.css'

function App() {
  const [newTodoValue, setNewTodoValue] = useState("")
  const [todoList, setTodoList] = useState([])

  function handleChange(event) {
    setNewTodoValue(event.target.value)
  }

  function addTodo(event) {
    event.preventDefault()
    setTodoList(prevTodoList => [...prevTodoList, newTodoValue])
    setNewTodoValue("")
  }

  const allTodos = todoList.map(todo => <p key={todo}>{todo}</p>)

  return (
    <div className="App">
      <form>
        <input type="text" name="todo" value={newTodoValue} onChange={handleChange} />
        <button onClick={addTodo}>Add todo item</button>
      </form>
      {allTodos}
    </div>
  )
}

export default App

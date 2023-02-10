import './App.css'
import Example from "./Example"
import Example2 from "./Example2"

function App() {

  return (
  <div>
    <Example render={function(name) {
        return (
      <div>
        <h1>Hey {name}</h1>
      </div>
        )
    }} />
    <Example2 render={
        function(isDaytime) {
          return (
            <h1>{isDaytime ? "Good day" : "Good evening"}, Greg!</h1>
          )
        }
      }/>
  </div>
  )
}

export default App

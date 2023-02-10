import './App.css'
import Example from "./Example"
import Example2 from "./Example2"
import Example3 from "./Example3"

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
    <Example3 render={
                function(number) {
                    return (
                        <h1>{number >= 50 ? "You pass" : "You fail"}, Greg</h1>
                    )
                }
      }/>
  </div>
  )
}

export default App

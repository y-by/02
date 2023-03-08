import './App.css'
import Header from './Header'
import Button from './Button'
import ThemeContext from './ThemeContext'

function App() {

  return (
    <div className="App">
      <div>
      <Header />
      <ThemeContext.Consumer>
        {theme => (
          <Button />
        )}  
      </ThemeContext.Consumer>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navigation from './navigation/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
    </div>
  )
}

export default App

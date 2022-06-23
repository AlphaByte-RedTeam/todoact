import React, { FC } from 'react'
import './App.css'
import Navigation from './navigation/Navigation'

const App: FC = () => {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
    </div>
  )
}

export default App

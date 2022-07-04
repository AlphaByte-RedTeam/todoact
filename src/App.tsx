import React, { useState, FC, FormEvent } from 'react'

import Navigation from './navigation/Navigation'
import Input from './components/input'
import { Todo } from './components/types'

import './App.css'

const App: FC = () => {
  const [todoTitle, setTodoTitle] = useState<string>('')

  const handleSubmit = () => {
    // TODO: Add code here
  }
  
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <body className="flex md:flex-1 justify-center item-center">
        <form onSubmit={handleSubmit}>
          <Input name="title" value={todoTitle} setValue={setTodoTitle} />
        </form>
        {/* <TodoList todos={todos} setTodos={setTodos} /> */}
      </body>
      <footer>
        {/* TODO: Add footer here */}
      </footer>
    </div>
  )
}

export default App

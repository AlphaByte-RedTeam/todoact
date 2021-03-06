import React, { Dispatch, FC, SetStateAction } from "react";
import TodoItem from "./item";
import { Todo } from "../types";

type Props = {
    todos: Todo[]
    setTodos: Dispatch<SetStateAction<Todo[]>>
}

const TodoList: FC<Props> = ({ todos, setTodos }) => {
    const updateTodo = (updatedIndex: number) => (taskName: string) => {
        const updatedTodo: Todo = { taskName }
        setTodos(
            // Map the todos array
            todos.map((todo, index) => (index === updatedIndex ? updatedTodo : todo))
        )
    }
    
    const removeTodo = (index: number) => () => {
        setTodos((prevState) => prevState.splice(index, 1))
    }
    // TODO: add displayTodo function
    return (
        // TODO: displays here
        <>
        </>
    )
}

export default TodoList
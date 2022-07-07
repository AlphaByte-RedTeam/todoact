import React, { Dispatch, FC, SetStateAction } from "react";
import TodoItem from "./item";
import { Todo } from "../types";

type Props = {
    todos: Todo[]
    setTodos: Dispatch<SetStateAction<Todo[]>>
}

const TodoList: FC<Props> = ({ todos, setTodos }) => {
    // TODO: add updateTodo function
    // TODO: add removeTodo function
    // TODO: add displayTodo function
    return (
        // TODO: displays here
        <>
        </>
    )
}

export default TodoList
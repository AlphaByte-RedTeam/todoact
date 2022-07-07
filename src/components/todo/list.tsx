import React, { Dispatch, FC, SetStateAction } from "react";
import TodoItem from "./item";
import { Todo } from "../types";

type Props = {
    todos: Todo[]
    setTodos: Dispatch<SetStateAction<Todo[]>>
}

const TodoList: FC<Props> = ({ todos, setTodos }) => {
    return (
        <>
        </>
    )
}

export default TodoList
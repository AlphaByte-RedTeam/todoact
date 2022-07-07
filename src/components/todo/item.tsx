import React, { useState, useEffect, FC } from "react";
import { Todo } from "../types";

type Props = {
    todo: Todo
    editTodo: (title: string) => void
    removeTodo: () => void
}

const TodoItem: FC<Props> = ({ todo, editTodo, removeTodo }) => {
    const [taskName, setTaskName] = useState(todo.taskName)
    const [isEdit, setIsEdit] = useState(false)

    useEffect(() => setTaskName(todo.taskName), [todo])

    const handleEdit = () => {
        if (taskName !== '')
            editTodo(taskName)

        setIsEdit(false)
    }

    return (
        <>
        </>
    )
}

export default TodoItem;
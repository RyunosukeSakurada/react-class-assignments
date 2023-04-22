import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import InputTodo from '@/components/InputTodo'
import TodoList from '@/components/TodoList'
import { useEffect } from 'react'

import { getInitialTodos } from '@/lib/helper'


function TodoApp() {
    const [todos, setTodos] = useState(getInitialTodos())


    useEffect(() => {
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    }, [todos])

    const updateTodo = (id, key, updateValue) => {
        setTodos((prevState) => {
            return prevState.map(todo => {
                if (todo.id === id) {
                    todo[key] = updateValue
                }

                return todo
            })
        })
    }

    const deleteTodo = (id) => {
        setTodos((prevState) => {
            return prevState.filter(todo => todo.id !== id)
        })
    }



    const addTodo = (title) => {
        const newTodo = {
            id: uuidv4(),
            title,
            completed: false
        }
        console.log(newTodo)
        setTodos([newTodo, ...todos])
    }

    
    return (
        <>
            <InputTodo addTodo={addTodo} />
            <TodoList
                todos={todos}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
            />
        </>
    )
}

export default TodoApp
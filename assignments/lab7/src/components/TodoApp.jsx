import { useState} from 'react'
import { v4 as uuidv4 } from 'uuid'
import InputTodo from '@/components/InputTodo'
import TodoList from '@/components/TodoList'
import { todos as todosData } from '@/data/todoData'


function TodoApp() {
    const [todos, setTodos] = useState(todosData)


     //Function to toggle the completion status of a ToDo item
    const handleChange = (id) => {
        /*
            map through the existing tasks (prevState) one by one (which we'll refer to as 'todo') and for 
            the one with an id that matches the one being clicked, we toggle its 'completed' property
         */
        setTodos((prevState) => {
            return prevState.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }

                return todo
            })
        })
    }

    //Function to remove a ToDo item from the 'todos' state variable corresponding to a specific ID
    const deleteTodo = (id) => {
        /*
            map through the existing tasks (prevState) one by one and for each element, which is a 'todo', 
            we filter out those that do not have the selected ID and return them.
         */
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
                handleChange={handleChange}
                deleteTodo={deleteTodo}
            />
        </>
    )
}

export default TodoApp
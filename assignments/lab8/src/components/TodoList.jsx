import React from 'react'
import TodoItem from '@/components/TodoItem'

function TodoList({ todos, updateTodo, deleteTodo }) {
    return (
        <ul>
            {todos?.map((todo) =>
                <TodoItem
                    key={todo.id}
                    todoItem={todo}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                />
            )}
        </ul>
    )
}

export default TodoList
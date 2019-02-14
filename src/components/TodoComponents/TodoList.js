import React from 'react'
import Todo from './Todo';

function TodoList(props) {
    return (
        <div>
            {props.todos.map((todo => {
                return (
                    <Todo 
                        id={todo.id}
                        key = {todo.id}
                        deleteTodo = {props.deleteTodo}
                        toggleCompleted = {props.toggleCompleted}
                        task = {todo.task} 
                    />
                )
            }))}
        </div>
    )
}

export default TodoList
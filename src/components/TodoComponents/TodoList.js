import React from 'react'
import Todo from './Todo';

function TodoList(props) {
    const sortedList = props.todos.sort((a, b) => a.completed - b.completed);
    return (
        <div>
            {sortedList.map((todo => {
                return (
                    <Todo 
                        completed={todo.completed} 
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
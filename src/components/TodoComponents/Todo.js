import React from 'react';
import './Todo.css'

function Todo(props) {
    return (
        <div className="todo">
            <button id={props.id} onClick={props.deleteTodo}>X</button>
            <p id={props.id} onClick={() => props.toggleCompleted(props.id)} className={`todo-content${props.completed ? ' completed' : ''}`}>{props.task}</p>
        </div>
    )
}

export default Todo
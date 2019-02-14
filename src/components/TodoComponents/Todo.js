import React from 'react';
import './Todo.css'

function Todo(props) {
    return (
        <div className="todo-content">
            <button id={props.id} onClick={props.deleteTodo}>X</button>
            <p id={props.id} onClick={props.toggleCompleted} className="todo">{props.task}</p>
        </div>
    )
}

export default Todo
import React from 'react';
import './Todo.css'

function Todo(props) {
    return (
        <div>
            <p id={props.id} onClick={props.toggleCompleted} className="todo">{props.task}</p>
        </div>
    )
}

export default Todo
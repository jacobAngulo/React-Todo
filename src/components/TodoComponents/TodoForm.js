import React from 'react';

const TodoForm = (props) => {
    return (
        <form>
            <div>
                <input 
                type='text'
                value={props.task}
                onChange={props.handleChanges}
                />
                <button onClick={props.addTodo}>Add Todo</button>
            </div>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    )
}

export default TodoForm
import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            task: ''
        }
    }

    handleChanges = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        this.props.addTodo(event, this.state.task);    
        this.setState({ task: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type='text'
                name='task'
                value={this.state.task}
                onChange={this.handleChanges}
                />
                <button>Add Todo</button>
            </form>
        )    
    }
}

export default TodoForm
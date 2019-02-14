import React from 'react';
// import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'

const todoArray = []

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoArray,
      task: '',
      completed: false,
      id: Date.now()
    }
  }

  addTodo = event => {
    event.preventDefault();
    const newTodo = {
      task: this.state.task,
      completed: false,
      id: this.state.id
    }

    this.setState({
      todos: [...this.state.todos, newTodo],
      task: '',
      completed: false,
      id: Date.now()
    })
  }

  toggleCompleted = event => {
    event.target.classList.toggle('completed');
    const id = event.target.id;
    this.state.todos.forEach((index) => {
      if(index.id == id) {
        if(index.completed == false) {
          index.completed = true
        } else {
          index.completed = false
        }
      }
    })
    console.log(id);
    console.log(this.state.todos)
  }

  clearCompleted =event => {
    event.preventDefault();
    const newArray = [];
    for(let i = 0; i < this.state.todos.length; i++) {
      if(this.state.todos[i].completed !== true) {
        newArray.push(this.state.todos[i])
      }
    }
    this.setState({
      todos: newArray
    })
  }

  handleChanges = event => {
    this.setState({
      task: event.target.value
    })
  }

  render() {
    return (
      <div>
        <TodoList 
          todos = {this.state.todos}
          toggleCompleted = {this.toggleCompleted} 
        />
        <TodoForm 
          task = {this.state.task}
          addTodo = {this.addTodo} 
          clearCompleted = {this.clearCompleted}
          handleChanges = {this.handleChanges}
        />
      </div>
    );
  }
}

export default App;

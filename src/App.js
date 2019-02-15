import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'

const todoArray = []

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoArray,
    }
  }

  addTodo = (event, task) => {
    event.preventDefault();
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    if(task !== '') {
      this.setState({
        todos: [...this.state.todos, newTask]
      });
    }
  }

  toggleCompleted = id => {
    // event.target.classList.toggle('completed');
    this.setState({
      todos: this.state.todos.map((todo) => {
        if(todo.id === id) {
          return {
            ...todo,


            completed: !todo.completed
          }
        }
        return todo
      })
    })
    // this.state.todos.forEach((index) => {
    //   if(index.id == id) {
    //     if(index.completed == false) {
    //       index.completed = true
    //     } else {
    //       index.completed = false
    //     }
    //   }
    // })
    console.log(id);
    console.log(this.state.todos)
  }

  deleteTodo = event => {
    event.preventDefault();
    console.log(event.target.id)
    console.log(this.state.todos)
    const newArray = [];
    for(let i = 0; i < this.state.todos.length; i++) {
      if(event.target.id != this.state.todos[i].id) {
        newArray.push(this.state.todos[i])
      }
    }
    this.setState({
      todos: newArray
    })
  }

  clearCompleted = event => {
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

  render() {
    return (
      <div className="app">
        <TodoList 
          todos = {this.state.todos}
          toggleCompleted = {this.toggleCompleted} 
          deleteTodo = {this.deleteTodo}
        />
        <TodoForm 
          addTodo = {this.addTodo} 
          // handleChanges = {this.handleChanges}
        />
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;

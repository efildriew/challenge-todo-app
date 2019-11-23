import React, { Component } from "react";

import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import todoService from "./services/todoService";

import "./App.css";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    todoService.getTodos().then(response => {
      this.setState({ todos: response });
    });
  }

  addedTodo = todo => {
    todoService.getTodos().then(response => {
      this.setState({ todos: response });
    });
  };

  render() {
    return (
      <div className="App">
        <img src="ironhack.png" alt="ironhack-logo"></img>
        <h1>Ironhack Todo List</h1>
        <AddTodo addedTodo={this.addedTodo} />
        <div className="container">
          <Todos todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;

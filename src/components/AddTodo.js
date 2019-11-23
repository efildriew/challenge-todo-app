import React, { Component } from "react";
import todoService from "../services/todoService";

import "../styles/AddTodo.css";

class AddTodo extends Component {
  state = {
    title: "",
    body: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    todoService
      .newTodo(this.state)
      .then(response => this.props.addedTodo(response));
    this.setState({
      title: "",
      body: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title of your ToDo"
          value={this.state.title}
          onChange={this.onChange}
          className="textEntry"
        />
        <input
          type="text"
          name="body"
          placeholder="Content of your ToDo"
          value={this.state.body}
          onChange={this.onChange}
          className="textEntry"
        />
        <input type="submit" className="button" />
      </form>
    );
  }
}

export default AddTodo;

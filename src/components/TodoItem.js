import React, { Component } from "react";

import "../styles/TodoItem.css";

class TodoItem extends Component {
  render() {
    return (
      <div className="todo">
        <p className="title">{this.props.title}</p>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default TodoItem;

import React, { Component } from "react";

import TodoItem from "./TodoItem";

class Todos extends Component {
  render() {
    return this.props.todos.map(({ _id, title, body }) => (
      <TodoItem key={_id} title={title} body={body} />
    ));
  }
}

export default Todos;

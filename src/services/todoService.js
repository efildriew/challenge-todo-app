import axios from "axios";

class TodoService {
  constructor() {
    this.todos = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
      withCredentials: true
    });
  }

  async getTodos() {
    const { data } = await this.todos.get("/todos");
    return data;
  }

  async newTodo(todo) {
    return this.todos.post("/todos", todo);
  }
}

const todoService = new TodoService();

export default todoService;

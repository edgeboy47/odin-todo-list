const Todo = require("../Todo/Todo.js");

class TodoList {
  todos;

  constructor(todos) {
    this.todos = todos === undefined ? [] : todos;
  }

  addTodo(todo) {
    if (todo instanceof Todo) {
      this.todos.push(todo);
    }
  }

  getTodos() {
    return Array.from(this.todos);
  }

  deleteTodo(id) {
    this.todos = Array.from(this.todos.filter(todo => todo.id !== id));
  }

  updateTodo(todo) {
    this.todos = Array.from(this.todos.map(t => t.id === todo.id ? todo : t));
  }
}

module.exports = TodoList;
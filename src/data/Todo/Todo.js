class Todo {
  constructor(title, description, dueDate) {
    this.title = title;
    this.isCompleted = false;
    this.description = description;
    this.dueDate = dueDate;
    this.id = Date.now() + Math.random();
  }
}

module.exports = Todo;

const Todo = require("./Todo.js");

test("testing testing", () => {
  const todo = new Todo("test", "test");
  expect(todo.title).toBe("test");
  expect(todo.isCompleted).toBe(false);
});

test("test isCompleted", () => {
  const todo = new Todo("test", "test");
  expect(todo.isCompleted).toBe(false);
})
const TodoList = require("./TodoList.js");

describe('TodoList', () => {
  let todolist;

  beforeAll(() => todolist = new TodoList([]));

  test('should be an instance of TodoList', () => {
    expect(todolist).toBeInstanceOf(TodoList);
  });
})
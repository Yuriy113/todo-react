export type Task = {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
};

export type editTask = (task: string, id: string) => void;
export type addTask = (task: string) => void;
export type deleteTask = (id: string) => void;
export type toggleTask = (id: string) => void;
export type editTodo = (id: string) => void;

export type EditTodoFormProps = {
  task: Task;
  editTodo: editTask;
};

export type TodoFormProps = {
  addTodo: addTask;
};

export type TodoProps = {
  task: Task;
  deleteTodo: deleteTask;
  editTodo: editTodo;
  toggleComplete: toggleTask;
};

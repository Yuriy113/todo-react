import React, { useEffect, useState } from 'react';
import { Todo } from './Todo/Todo';
import { TodoForm } from './TodoForm/TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { EditTodoForm } from './EditTodoForm';
import { Task } from '../types';
import ButtonGroup from './ButtonGroup';

export const TodoWrapper = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [appState, setAppState] = useState('all');

  useEffect(() => {
    const ls = localStorage.getItem('todos');

    if (ls) {
      const todos = JSON.parse(ls);
      setTasks(todos);
    }
  }, []);

  useEffect(() => {
    const todos = JSON.stringify(tasks);
    localStorage.setItem('todos', todos);
  }, [tasks]);

  const addTodo = (task: string) => {
    setAppState('all');
    const newTask = { id: uuidv4(), task, completed: false, isEditing: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleComplete = (id: string): void => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    );
  };

  const toggleEdit = (id: string): void => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, isEditing: !task.isEditing } : task)),
    );
  };

  const deleteTask = (id: string): void => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const editTask = (task: string, id: string): void => {
    setTasks((prevTasks) =>
      prevTasks.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo,
      ),
    );
  };

  const deleteCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  const filteredTasks =
    appState === 'active'
      ? tasks.filter((task) => !task.completed)
      : appState === 'completed'
      ? tasks.filter((task) => task.completed)
      : tasks;

  return (
    <>
      <div className="todo-wrapper">
        <h1 className="app-title">todos</h1>
        <TodoForm addTodo={addTodo} />
        <ButtonGroup setAppState={setAppState} />
        <button className="state-btn" onClick={deleteCompleted}>
          Clear completed
        </button>
        {filteredTasks.map((task) =>
          task.isEditing ? (
            <EditTodoForm key={task.id} editTodo={editTask} task={task} />
          ) : (
            <Todo
              key={task.id}
              task={task}
              deleteTodo={deleteTask}
              editTodo={toggleEdit}
              toggleComplete={toggleComplete}
            />
          ),
        )}
      </div>
    </>
  );
};

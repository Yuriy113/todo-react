import React, { useState } from 'react';
import { Todo } from './Todo';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { EditTodoForm } from './EditTodoForm';
import { Task } from '../types';

export const TodoWrapper = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [appState, setAppState] = useState('all');

  const addTodo = (task: string) => {
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

  const filteredTasks =
    appState === 'active'
      ? tasks.filter((task) => !task.completed)
      : appState === 'completed'
      ? tasks.filter((task) => task.completed)
      : tasks;

  return (
    <>
      <div className="TodoWrapper">
        <h1>todos</h1>
        <TodoForm addTodo={addTodo} />
        {filteredTasks.map((task) =>
          task.isEditing ? (
            <EditTodoForm key={task.id} editTodo={toggleEdit} task={task} />
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
        <button onClick={() => setAppState('all')}>all</button>
        <button onClick={() => setAppState('active')}>active</button>
        <button onClick={() => setAppState('completed')}>completed</button>
      </div>
    </>
  );
};

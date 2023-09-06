import React from 'react';
import { TodoProps } from '../types';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }: TodoProps) => {
  return (
    <div className="Todo">
      <p className={`${task.completed ? 'completed' : ''}`} onClick={() => toggleComplete(task.id)}>
        {task.task}
      </p>
      <div>
        <button onClick={() => editTodo(task.id)}>Edit </button>
        <button onClick={() => deleteTodo(task.id)}>Remove </button>
      </div>
    </div>
  );
};

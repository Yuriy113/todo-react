import React, { useState } from 'react';
import { TodoFormProps } from '../../types';

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }: TodoFormProps) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="What needs to be done?"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

import React from 'react';
import { TodoProps } from '../../types';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }: TodoProps) => {
  return (
    <div className="todo">
      <p className={`${task.completed ? 'completed' : ''}`} onClick={() => toggleComplete(task.id)}>
        {task.task}
      </p>
      <div>
        <EditNoteIcon data-testid="edit-icon" onClick={() => editTodo(task.id)} />
        <DeleteForeverIcon data-testid="delete-icon" onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

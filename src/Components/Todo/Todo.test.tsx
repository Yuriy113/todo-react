import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Todo } from './Todo';
import { TodoProps } from '../../types';

describe('Todo', () => {
  const mockTask: TodoProps = {
    task: {
      id: '1',
      task: 'Test Task',
      completed: false,
      isEditing: false,
    },
    deleteTodo: jest.fn(),
    editTodo: jest.fn(),
    toggleComplete: jest.fn(),
  };

  it('calls deleteTodo when the delete icon is clicked', () => {
    render(<Todo {...mockTask} />);

    const deleteIcon = screen.getByTestId('delete-icon');
    fireEvent.click(deleteIcon);

    expect(mockTask.deleteTodo).toHaveBeenCalledWith('1');
  });

  it('calls editTodo when the edit icon is clicked', () => {
    render(<Todo {...mockTask} />);

    const editIcon = screen.getByTestId('edit-icon');
    fireEvent.click(editIcon);

    expect(mockTask.editTodo).toHaveBeenCalledWith('1');
  });

  it('calls toggleComplete when the task text is clicked', () => {
    render(<Todo {...mockTask} />);

    const taskText = screen.getByText('Test Task');
    fireEvent.click(taskText);

    expect(mockTask.toggleComplete).toHaveBeenCalledWith('1');
  });
});

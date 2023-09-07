import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TodoForm } from './TodoForm';

describe('TodoForm', () => {
  it('calls addTodo when the form is submitted with a value', () => {
    const addTodo = jest.fn();
    const { container, getByPlaceholderText } = render(<TodoForm addTodo={addTodo} />);
    const inputElement = getByPlaceholderText('What needs to be done?');

    fireEvent.change(inputElement, { target: { value: 'Test Task' } });
    const formElement = container.querySelector('.todo-form');
    fireEvent.submit(formElement!);

    expect(addTodo).toHaveBeenCalledWith('Test Task');
  });

  it('does not call addTodo when the form is submitted without a value', () => {
    const addTodo = jest.fn();
    const { container } = render(<TodoForm addTodo={addTodo} />);
    const formElement = container.querySelector('.todo-form');
    formElement!.dispatchEvent(new Event('submit'));

    expect(addTodo).not.toHaveBeenCalled();
  });
});

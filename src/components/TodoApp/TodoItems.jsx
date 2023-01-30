import React from 'react';
import { HiTrash } from 'react-icons/hi2';

const TodoItems = function ({ todos, handleCheckbox, handleDelete }) {
  return (
    <div className="mt-2 flex flex-col gap-3">
      <ul>
        {todos.map((todo, index) => {
          return (
            <li
              className="flex cursor-pointer items-center justify-between gap-3 border-b border-b-gray-800 py-1 px-1 hover:rounded-lg hover:bg-gray-800"
              key={index}
            >
              <div className="flex w-full gap-3">
                <input
                  type="checkbox"
                  className="cursor-pointer border-2"
                  name="todo"
                  id={todo.title}
                  onChange={() => handleCheckbox(todo.id)}
                  checked={todo.isCompleted ? 'checked' : ''}
                />
                <label htmlFor={todo.title} className="w-full cursor-pointer">
                  <p className={todo.isCompleted ? 'line-through' : ''}>
                    {index + 1}. {todo.title}
                  </p>
                </label>
              </div>
              <button
                className="rounded-full p-3 hover:bg-gray-600"
                onClick={() => handleDelete(todo.id)}
              >
                <HiTrash />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoItems;

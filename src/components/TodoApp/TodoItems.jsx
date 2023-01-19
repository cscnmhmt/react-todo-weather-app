import React from 'react';

const TodoItems = function ({ todos, handleCheckbox, handleDelete }) {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li className="flex gap-3" key={index}>
              <input
                type="checkbox"
                className="border-2"
                name="checkbox"
                onChange={() => handleCheckbox(todo.id)}
                checked={todo.isCompleted ? 'checked' : ''}
              />
              <span>{index + 1}.</span>
              <p className={todo.isCompleted ? 'line-through' : ''}>
                {todo.title}
              </p>
              <button
                className="border-2"
                onClick={() => handleDelete(todo.id)}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoItems;
